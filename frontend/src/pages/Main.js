import './Main.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//Serviços
import io from 'socket.io-client';
import api from '../services/api';
import { iconURL, emblemURL, routeURL, championURL } from '../services/publicAssetsApi';
import { useDataLogin } from '../context/DataLogin';
//Componentes
import ChatWindow from '../components/ChatWindow';
import MatchList from '../components/MatchList';
import SideMenu from '../components/SideMenu';
//Imagens
import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';
import itsamatch from '../assets/itsamatch.png'
import BoxProfile from '../components/BoxProfile';

export default function Main({ match, history }) {
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
            setMatchUser(invocador);
        })

    }, [authentication]);

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
            return m._id === idFriend ? { ...m, chatIsOpen: !m.chatIsOpen } : m
        });
        setMatches(chatOpenStatus);
    }

    return (<>
        <div className="main-container">
            <Link to="/">
                <img className="logo" src={logo} alt="MeuDuo" />
            </Link>
            {users.length > 0 ? (
                <ul>
                    {users.map(user => (
                        <li key={user._id}>
                            <footer>
                                <div className="emblem-div">
                                    <div className="emblem-mode">
                                        <p>Solo</p>
                                        <img className="emblem" src={emblemURL(user.league_obj.solo.tier)} alt={user.league_obj.solo.tier} />
                                        <div className="tier-name" >
                                            {user.league_obj.solo.tier} {user.league_obj.solo.rank}
                                        </div>
                                    </div>
                                    <div className="emblem-mode">
                                        <p>Flex</p>
                                        <img className="emblem" src={emblemURL(user.league_obj.flex.tier)} alt={user.league_obj.flex.tier} />
                                        <div className="tier-name">
                                            {user.league_obj.flex.tier} {user.league_obj.flex.rank}
                                        </div>
                                    </div>
                                </div>

                                <div className="infoUsers">
                                    <div className="infoLol">
                                        <img className="icon" src={iconURL(user.profileIconId)} alt="icone de invocador" />
                                        <p>{user.summonerLevel}</p>
                                        <strong>{user.username}</strong>
                                    </div>
                                    <div className="infoInsta">
                                        <img className="icon" src={user.avatarInstagram} alt="avatar instagram" />
                                        <p>{user.age}</p>
                                        <strong>{user.userInstagram}</strong>
                                    </div>
                                </div>

                                <div className="mainChamps">
                                    <img src={championURL(user.champion)} alt={user.champion} />
                                    <img src={championURL(user.champion2)} alt={user.champion2} />
                                    <img src={championURL(user.champion3)} alt={user.champion3} />
                                    <img className="icon.small" src={routeURL(user.route)} alt={`Rota do ${user.route}`} />
                                    <img src={routeURL(user.route2)} alt={`Rota do ${user.route2}`} />
                                </div>
                            </footer>

                            <div className="buttons">
                                <button type="button" onClick={() => handleDislike(user._id)}>
                                    <img src={dislike} alt="Dislike" />
                                </button>
                                <button type="button" onClick={() => handleLike(user._id)}>
                                    <img src={like} alt="Like" />
                                </button>
                            </div>
                        </li>

                    ))}
                </ul>
            ) : (
                    <div className="empty">Acabou  :(</div>
                )}


            {matchUser && (
                <div className="match-container">
                    <img src={itsamatch} alt="It's a match" />

                    <img className="avatar" src={iconURL(matchUser.profileIconId)} alt="" />
                    <strong> {matchUser.username} </strong>
                    <p> {matchUser.summonerLevel} </p>

                    <button type="button" onClick={() => setMatchUser(null)}>FECHAR</button>
                </div>
            )}


        </div>
        <SideMenu chatFriendsId={handleChat} matchList={matches}> </SideMenu>


        <div className="chatBox-container">
            {
                matches.filter(m => m.chatIsOpen === true).length > 0 ?
                    (<ul>
                        {matches.filter(m => m.chatIsOpen === true).map(m => (
                            <li key={m._id}>
                                <ChatWindow token={authentication.token} userId={authentication.idUser} friend={m}></ChatWindow>
                            </li>
                        ))}
                    </ul>
                    ) : null
            }
        </div>

    </>)
}