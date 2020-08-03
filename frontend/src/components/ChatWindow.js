import React, { useEffect, useState } from 'react';
import './ChatWindow.css';
import io from 'socket.io-client';
import api from '../services/api';

import { iconURL } from '../services/publicAssetsApi'

function dateFormatShort(d) {
    const date = new Date(d)
    return date.toLocaleString('pt-br', {hour:'2-digit', minute:'2-digit'})
}

function dateFormatComplete(d) {
    const date = new Date(d)
    return date.toLocaleString('pt-br', {day:'2-digit', month:'short', weekday:'long',hour:'2-digit', minute:'2-digit'})
}

export default function ChampionSelector({ token, userId, friend }) {
    const [msgList, setMsgList] = useState([])
    const [msgText, setMsgText] = useState('')
    console.log({ token, userId, friend })


    useEffect(() => {
        async function loadMessages() {
            try {
                const response = await api.get(`/message/${friend._id}`, {
                    headers: {
                        authorization: token,
                    }
                })
                setMsgList(response.data);
            }
            catch (error) {
                console.log({ msg: "Fail loading messages", error })
            }
        }
        loadMessages();

    }, [userId, friend, token]);

    useEffect(() => {
        const socket = io('http://localhost:3333', {
            query: { user: userId }
        });

        socket.on('msg_new', msg => {

            setMsgList([...msgList, msg])           
        })
    }, [userId, msgList])

    async function clickHandlerSend(e) {
        e.preventDefault();
        await api.post(`/message`, {
            "text": msgText,
            "receiverId": friend._id
        }, {
            headers: {
                authorization: token,
            }
        })
        setMsgText('')
    }

    return (
        <div className="chat-window">
            <div className="titlebar">
                <img src={iconURL(friend.profileIconId)}
                    alt={friend.username}
                    tittle={friend.username} />
            </div>
            <div className="txt-conteiner">
                <ul>{
                    (msgList || []).map(m => (
                        <li key={m._id}>
                            <div className={"text-baloon " + (m.sender === friend._id ? "esquerda" : "direita")}
                            title={dateFormatComplete(m.createdAt)}>
                                <p>{m.text}</p>
                            <div className={"text-datemark " + (m.sender === friend._id ? "esquerda" : "direita")}>
                                {dateFormatShort(m.createdAt)}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div >
                <form className="send-box">
                    <input className="send-input"
                        placeholder="..."
                        onChange={e => setMsgText(e.target.value)}
                        value={msgText}>
                    </input>
                    <button className="send-button" onClick={clickHandlerSend}>
                        Enviar
                </button>
                </form>
            </div>


        </div>
    )
}