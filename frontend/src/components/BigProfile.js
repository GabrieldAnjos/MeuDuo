import React from 'react';
import styled from 'styled-components'
//Serviços
import { iconURL } from '../services/publicAssetsApi';

const ProfileWraper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding: 5px;
    img{
        height: 100%;
        width: 100%;
        border-radius: 50%;
        border: 2px solid #CF833A;
        margin: 5px;
    }
    div{
        font: 'Montsserant', sans-serif;
        color: white;
        font-size: 1.2em;
    }
`

export default function BigProfile({profileIconId, username}) {

    return (
        <ProfileWraper>
            <img className="icon-small" src={iconURL(profileIconId)} alt="Icone de Invocador"></img>
            {/* <div>{username}</div> */}
        </ProfileWraper>
    );
}