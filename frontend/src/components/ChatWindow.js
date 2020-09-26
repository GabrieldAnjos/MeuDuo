import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components'
import ScrollToBottom from 'react-scroll-to-bottom';
import Close from '@material-ui/icons/Close'
import Send from '@material-ui/icons/Send'
//import './ChatWindow.css';
import io from 'socket.io-client';
import api from '../services/api';

import { iconURL } from '../services/publicAssetsApi'

function dateFormatShort(d) {
    const date = new Date(d)
    return date.toLocaleString('pt-br', { hour: '2-digit', minute: '2-digit' })
}

function dateFormatComplete(d) {
    const date = new Date(d)
    return date.toLocaleString('pt-br', { day: '2-digit', month: 'short', weekday: 'long', hour: '2-digit', minute: '2-digit' })
}

const ChatWindow = styled.div`
    width: 300px;
    height: 300px;
    /* border-top: 20px solid #ccc; */
    border-radius: 15px 15px 0px 0px;
    padding: 5px;
    margin: 0px;
    margin-left: 10px;
    margin-right: 10px;
    box-sizing: border-box;
    background-color: rgba(0,0,0,0.9);

    display:flex;
    flex-direction: column;
    justify-content: flex-start;
`

const Title = styled.div`
    height: 50px;
    /* background-color: rgb(215, 239, 255); */
    /* overflow: hidden; */
    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: #CF833A 2px solid;
    box-shadow: 0px 2px 1px #000;
`

const PlayerIcon = styled.img`
    height: 80%;
    border-radius: 50%;
    border: #CF833A 1.5px solid;
`
const PlayerName = styled.div`
    color: white;
    font: 'helvetica' sans-serif;
    font-size: 1.2em;
    margin: auto;
    margin-left: 10px;

`

const CloseButton = styled(Close)`
    cursor: pointer;
    color: white;
    margin:10px;
    border-radius: 50%;
    &:hover{
        background-color: #333;
    }
`


const TextScroll = styled(ScrollToBottom)`
    flex: 1;
    overflow: hidden;
`

const List = styled.div`
    display: flex;
    flex-direction:  column;
`

const DateMark = styled.div`
    font-family: monospace;
    font-size: 8px;
    padding: 0px;
    position:relative;
    bottom:0px;
`

const LeftMsg = css`
    float: left;
    color: #222;
    background-color: white;
    ${DateMark} {
        text-align: left;
        color: #444;
    }
`

const RightMsg = css`
    float: right;
    color: white;
    background-color: #3f6483;
    ${DateMark} {
        text-align: right;
        color: #DDD;
    }
`

const Baloon = styled.div`
    ${(props => (props.side == "left" ? LeftMsg : RightMsg))}
    box-sizing: border-box;
    font-family: roboto, Helvetica, sans-serif;
    font-size: 14px;
    height:24px;
    border-radius:5px;
    padding: 8px;
    margin: 3px;
    line-break: loose;
    word-wrap: break-word;
    height: auto;
    max-width: 80%;
    box-shadow: 0 0 5px #0002;
`

const SendWraper = styled.div`
    height: 30px;
    margin-top: 5px;
    background: #0002;
    form{
        width:100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    input{
        width:100%;
        height: 100%;
        background: transparent;
        color: white;
        border: none;
        font: 0.75em, 'Roboto', sans-serif;
    }
    button{
        height: 100%;
        background: transparent;
        color: white;
        border: none;
        display:flex;
        align-items: center;
        &:hover{
                color: #FFF8;
        }
        
    }
    
`


export default function ChampionSelector({ token, userId, friend }) {
    const [msgList, setMsgList] = useState([])
    const [msgText, setMsgText] = useState('')
    //console.log({ token, userId, friend })


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
        <ChatWindow>
            <Title>
                <PlayerIcon src={iconURL(friend.profileIconId)}
                    alt={friend.username}
                    tittle={friend.username} />
                <PlayerName>
                    {friend.username}
                </PlayerName>
                <CloseButton />
            </Title>
            <TextScroll mode="bottom">
                <List>
                    {(msgList || []).map(m => (
                        <div key={m._id}>
                            <Baloon side={m.sender === friend._id ? "left" : "right"}
                                title={dateFormatComplete(m.createdAt)}>
                                <p>{m.text}</p>
                                <DateMark side={m.sender === friend._id ? "left" : "right"}>
                                    {dateFormatShort(m.createdAt)}
                                </DateMark>
                            </Baloon>
                        </div>
                    ))}
                </List>

            </TextScroll>
            <SendWraper >
                <form>
                    <input
                        placeholder="..."
                        onChange={e => setMsgText(e.target.value)}
                        value={msgText}>
                    </input>
                    <button onClick={clickHandlerSend}>
                        <Send/>
                    </button>
                </form>
            </SendWraper>


        </ChatWindow>
    )
}