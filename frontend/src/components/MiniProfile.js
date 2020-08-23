import './MiniProfile.css';
import React from 'react';
//Serviços
import { iconURL } from '../services/publicAssetsApi';

export default function MiniProfile({profileIconId, username}) {

    return (
        <div className="miniProfile-container">
            <img className="icon-small" src={iconURL(profileIconId)} alt="Icone de Invocador"></img>
            <h3>{username}</h3>
        </div>
    );
}