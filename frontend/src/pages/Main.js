import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { Link } from 'react-router-dom';
import './Main.css';

import api from '../services/api';

import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';
import itsamatch from '../assets/itsamatch.png'

function iconURL(iconID) {
    return `/assets_riot/profileicon/${iconID}.png`
}

function emblemURL(tierName) {

    if (!tierName || tierName === 'Unranked')
        return '/assets_riot/ranked-emblems/Unranked.png'
    else
        return `/assets_riot/ranked-emblems/Emblem_${tierName}.png`
}

export default function Main({ match, history }) {
    const [users, setUsers] = useState([]);
    const [matches, setMatches] = useState([]);
    const [matchUser, setMatchUser] = useState(null);

    const token = "Bearer ".concat(match.params.token);

    useEffect(() => {
        async function loadUsers() {
            const response = await api.get('/user', {
                headers: {
                    authorization: token,
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
            //console.log(response.data)
            setUsers(response.data);
        }
        loadUsers();

        
    }, [match.params.id, token]);

    
    useEffect(() => {
        async function loadMatches() {
            const mat = await api.get('/user/matches', {
                headers: {
                    authorization: token,
                }
            })
            //console.log(mat.data);
            setMatches(mat.data);
        }
        loadMatches();

    },[match.params.id, token]);

    useEffect(() => {
        const socket = io('http://localhost:3333', {
            query: { user: match.params.id }
        });

        socket.on('match', invocador => {
            setMatchUser(invocador);
        })

    }, [match.params.id]);

    async function handleLike(invocadorId) {
        await api.post(`user/${invocadorId}/likes`, null, {
            headers: {
                authorization: token,
            },
        })

        setUsers(users.filter(user => user._id !== invocadorId));
    }

    async function handleDislike(invocadorId) {
        await api.post(`user/${invocadorId}/dislikes`, null, {
            headers: {
                authorization: token,
            },
        })

        setUsers(users.filter(user => user._id !== invocadorId));
    }

    return (
        <div className="main-container">
            <Link to="/">
                <img className="logo" src={logo} alt="MeuDuo" />
            </Link>
            <button onClick={() => history.push(`/profile/${token}`)}>Meu Perfil</button>
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
                                        <p>{user.idade}</p>
                                        <strong>{user.userInstagram}</strong>
                                    </div>
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

            <div className="matchlist-container">
                <h1>Matches:</h1>
                {
                matches.length > 0 ?
                (<ul>
                        {matches.map(user => (
                            <li key={user._id}>
                                <img className="icon small" src={iconURL(user.profileIconId)} alt="Icone de Invocador"></img>
                                <div>{user.username}</div>
                            </li>
                        ))}
                        </ul>
                ): "NADA"                        
                }
            </div>

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
    )
}