import { Background, Container, Carousel, ElementCarousel, ButtonsCarousel, ChatBox, Empty } from './styles';
import React, { useEffect, useState } from 'react';
//Serviços
import io from 'socket.io-client';
import api from '../../services/api';
import { iconURL } from '../../services/publicAssetsApi';
import { useDataLogin } from '../../context/DataLogin';
//Componentes
import ChatWindow from '../../components/ChatWindow';
import Card from '../../components/Card';
import SideMenu from '../../components/SideMenu';
import Header from '../../components/Header';
import MatchModal from '../../components/MatchModal';
//Imagens
import like from '../../assets/like.svg';
import dislike from '../../assets/dislike.svg';
import itsamatch from '../../assets/itsamatch.png'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export default function Main() {
    const [users, setUsers] = useState([]);
    const [matches, setMatches] = useState([]);
    const [matchUser, setMatchUser] = useState(null);

    const { authentication } = useDataLogin();

    useEffect(() => {
        async function loadUsers() {
            const response = await api.get('/user/list', {
                headers: {
                    authorization: authentication.token,
                }

            })
            //Formata dados do elo
            //-----------------------------
            //Nomes simplificados
            const queueRename = {
                RANKED_SOLO_5x5: "solo",
                RANKED_FLEX_SR: "flex"
            }
            response.data.forEach((u) => {
                //Transforma vetor em obj para facilitar a busca como chave-valor
                const league_obj = {}
                u.league.forEach(({ queueType, tier, rank }) => {
                    league_obj[queueRename[queueType]] = { tier, rank }
                })
                //adiciona informação de unranked caso não exista a queue
                league_obj.solo = league_obj.solo || { tier: 'Unranked', rank: '' }
                league_obj.flex = league_obj.flex || { tier: 'Unranked', rank: '' }

                u.league_obj = league_obj
            })
            //--------------------------------------
            setUsers(response.data);
            console.log(response.data);
        }
        loadUsers();


    }, [authentication]);

    useEffect(() => {
        async function loadMatches() {
            const mat = await api.get('/user/matches', {
                headers: {
                    authorization: authentication.token,
                }
            })
            //mat.data.map(m => { m.chatIsOpen = false });
            setMatches(mat.data);
        }
        loadMatches();

    }, [authentication, matchUser]);

    useEffect(() => {
        const socket = io('http://localhost:3333', {
            query: { user: authentication.idUser }
        });

        socket.on('match', invocador => {

            //Formata dados do elo
            //-----------------------------
            //Nomes simplificados
            const queueRename = {
                RANKED_SOLO_5x5: "solo",
                RANKED_FLEX_SR: "flex"
            }

            //Transforma vetor em obj para facilitar a busca como chave-valor
            const league_obj = {}
            invocador.league.forEach(({ queueType, tier, rank }) => {
                league_obj[queueRename[queueType]] = { tier, rank }
            })
            //adiciona informação de unranked caso não exista a queue
            league_obj.solo = league_obj.solo || { tier: 'Unranked', rank: '' }
            league_obj.flex = league_obj.flex || { tier: 'Unranked', rank: '' }

            invocador.league_obj = league_obj

            //--------------------------------------

            setMatchUser(invocador);
        })

    }, [authentication, matchUser]);

    async function handleLike(invocadorId) {
        await api.post(`user/${invocadorId}/likes`, null, {
            headers: {
                authorization: authentication.token,
            },
        })

        setUsers(users.filter(user => user._id !== invocadorId));
    }

    async function handleDislike(invocadorId) {
        await api.post(`user/${invocadorId}/dislikes`, null, {
            headers: {
                authorization: authentication.token,
            }
        })

        setUsers(users.filter(user => user._id !== invocadorId));
    }

    function handleChat(idFriend) {

        const chatOpenStatus = matches.map(m => {
            console.log(m.chatIsOpen);
            return m._id === idFriend ? { ...m, chatIsOpen: !m.chatIsOpen } : m
        });
        setMatches(chatOpenStatus);
    }

    function handleMatch(idFriend){
        setMatchUser(null);

        console.log(idFriend);
        if(idFriend !== null){
            handleChat(idFriend);
        }

       

    }

    const renderSlides = () =>
        users.map(user => (
            <ElementCarousel>
                <Card userCard={user}></Card>
                <ButtonsCarousel>
                    <button type="button" onClick={() => handleDislike(user._id)}>
                        <img src={dislike} alt="Dislike" />
                    </button>
                    <button type="button" onClick={() => handleLike(user._id)}>
                        <img src={like} alt="Like" />
                    </button>
                </ButtonsCarousel>
            </ElementCarousel>
        ));

    return (<>
        <Background>
            <Container>
                <Header />
                <Carousel>

                    {users.length > 0 ? (
                        <Slider
                            dots={false}
                            slidesToShow={3}
                            centerMode={true}
                            centerPadding={0}
                            speed={500}
                            slidesToScroll={1}
                            >
                            
                            {renderSlides()}
                        </Slider>
                    ) : (
                            <Empty>Acabou  :( </Empty>
                        )}

                </Carousel>
                
                {matchUser && (

                    <MatchModal onMatch={handleMatch} user={matchUser} ></MatchModal>    
                                          
                )}


            
            <SideMenu chatFriendsId={handleChat} matchList={matches}> </SideMenu>

            <ChatBox>
                {
                    matches.filter(m => m.chatIsOpen === true).length > 0 ?
                        (<ul>
                            {matches.filter(m => m.chatIsOpen === true).map(m => (
                                <li key={m._id}>
                                    <ChatWindow
                                    token={authentication.token}
                                    userId={authentication.idUser}
                                    friend={m}
                                    onClose={() => {handleChat(m.id); console.log(m.username)} }></ChatWindow>
                                </li>
                            ))}
                        </ul>
                        ) : null
                }
            </ChatBox>
            </Container>
        </Background>
    </>)
}