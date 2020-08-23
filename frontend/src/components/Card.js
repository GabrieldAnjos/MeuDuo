import './Card.css';
import React from 'react';
//Serviços
import { iconURL, emblemURL, routeURL, championURL } from '../services/publicAssetsApi';

export default function Card({ userCard }) {
    console.log(userCard);
    return (
        <div className="card-container">
            
                <div className="emblem-div">
                    <div className="emblem-mode">
                        <p>Solo</p>
                        <img className="emblem" src={emblemURL(userCard.league_obj.solo.tier)} alt={userCard.league_obj.solo.tier} />
                        <div className="tier-name" >
                            {userCard.league_obj.solo.tier} {userCard.league_obj.solo.rank}
                        </div>
                    </div>
                    <div className="emblem-mode">
                        <p>Flex</p>
                        <img className="emblem" src={emblemURL(userCard.league_obj.flex.tier)} alt={userCard.league_obj.flex.tier} />
                        <div className="tier-name">
                            {userCard.league_obj.flex.tier} {userCard.league_obj.flex.rank}
                        </div>
                    </div>
                </div>

                <div className="infoUsers">
                    <div className="infoLol">
                        <img className="icon" src={iconURL(userCard.profileIconId)} alt="icone de invocador" />
                        <p>{userCard.summonerLevel}</p>
                        <strong>{userCard.username}</strong>
                    </div>
                    <div className="infoInsta">
                        <img className="icon" src={userCard.avatarInstagram} alt="avatar instagram" />
                        <p>{userCard.age}</p>
                        <strong>{userCard.userInstagram}</strong>
                    </div>
                </div>

                <div className="mainChamps">
                    <img src={championURL(userCard.champion)} alt={userCard.champion} />
                    <img src={championURL(userCard.champion2)} alt={userCard.champion2} />
                    <img src={championURL(userCard.champion3)} alt={userCard.champion3} />
                    <img className="icon-small" src={routeURL(userCard.route)} alt={`Rota do ${userCard.route}`} />
                    <img src={routeURL(userCard.route2)} alt={`Rota do ${userCard.route2}`} />
                </div>
            
        </div>
    );

}