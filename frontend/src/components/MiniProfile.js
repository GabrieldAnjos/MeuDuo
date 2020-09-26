import React from 'react';
import styled, { css } from 'styled-components'
import '../assets/fonts.css';
//Serviços
import { iconURL } from '../services/publicAssetsApi';

const ProfileWraper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    padding: 5px;
    img{
        height: 45px;
        width: 45px;
        border-radius: 50%;
        border: 1px solid #CF833A;
        margin: 5px;
    }
    div{
        margin-left:10px;
        display:flex;
        flex-direction: column;
        align-items: flex-start;
    }
`
const Name = styled.p`
    font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        color: white;
        font-size: 1.1em;
`

const Status = styled.p`
    font-family: 'Roboto', sans-serif;
        color: limegreen;
        font-size: 0.7em;
`

export default function MiniProfile({profileIconId, username}) {

    return (
        <ProfileWraper>
            <img src={iconURL(profileIconId)} alt="Icone de Invocador"></img>
            <div>
                <Name>{username}</Name>
                <Status>online</Status>
            </div>
        </ProfileWraper>
    );
}