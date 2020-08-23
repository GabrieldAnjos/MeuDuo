import './SideMenu.css';
import React from 'react';
//Componentes
import BoxProfile from '../components/BoxProfile';
import MatchList from '../components/MatchList'

export default function SideMenu({matchList, chatFriendsId}) {

    return (
        <div className="sideMenu-container">
            <BoxProfile ></BoxProfile>
            <MatchList chatFriendsId={chatFriendsId} matchList={matchList} ></MatchList>
        </div>
    );
}