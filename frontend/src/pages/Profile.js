import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import { useDataLogin } from '../context/DataLogin';
import api from '../services/api';
import logo from '../assets/logo.svg';


function iconURL(iconID) {
    return `/assets_riot/profileicon/${iconID}.png`
}

function emblemURL(tierName) {

    if (!tierName || tierName === 'Unranked')
        return '/assets_riot/ranked-emblems/Unranked.png'
    else
        return `/assets_riot/ranked-emblems/Emblem_${tierName}.png`
}

export default function Profile({ match, history }) {
    const { authentication } = useDataLogin();

    const [users, setUsers] = useState({
        emblems: {
            RANKED_SOLO_5x5: {},
            RANKED_FLEX_SR: {},
        }
    });


    useEffect(() => {
        async function loadUsers() {
            const response = await api.get('/user/profile', {
                headers: {
                    authorization: authentication.token,
                }
            });
            //cria um objeto para acessar diretamente os dados do elo

            const emblems = {}
            if (response.data.league.length)
                response.data.league.forEach((elem) => {
                    emblems[elem.queueType] = { tier: elem.tier, rank: elem.rank }
                })
            //adiciona informação de unranked
            if (!emblems.RANKED_SOLO_5x5)
                emblems.RANKED_SOLO_5x5 = { tier: 'Unranked', rank: '' }

            if (!emblems.RANKED_FLEX_SR)
                emblems.RANKED_FLEX_SR = { tier: 'Unranked', rank: '' }

            response.data.emblems = emblems;

            console.log(response.data);

            setUsers(response.data);
        }

        loadUsers();
    }, [authentication]);


    return (
        <div className="profile-container">
            <Link to="/">
                <img className="logo" src={logo} alt="MeuDuo" />
            </Link>
                    <footer>
                        <div className="emblem-div">
                            <div className="emblem-mode">
                                <p>Solo</p>
                                <img className="emblem" src={emblemURL(users.emblems.RANKED_SOLO_5x5.tier)} alt={users.emblems.RANKED_SOLO_5x5.tier} />
                                <div className="tier-name" >
                                    {users.emblems.RANKED_SOLO_5x5.tier} {users.emblems.RANKED_SOLO_5x5.rank}
                                </div>
                            </div>
                            <div className="emblem-mode">
                                <p>Flex</p>
                                <img className="emblem" src={emblemURL(users.emblems.RANKED_FLEX_SR.tier)} alt={users.emblems.RANKED_FLEX_SR.tier} />
                                <div className="tier-name">
                                    {users.emblems.RANKED_FLEX_SR.tier} {users.emblems.RANKED_FLEX_SR.rank}
                                </div>
                            </div>
                        </div>

                        <div className="infoUsers">
                            <div className="infoLol">
                                <img className="icon" src={iconURL(users.profileIconId)} alt="icone de invocador" />
                                <p>{users.summonerLevel}</p>
                                <strong>{users.username}</strong>
                            </div>
                            <div className="infoInsta">
                                <img className="icon" src={users.avatarInstagram} alt="avatar instagram" />
                                <p>{users.idade}</p>
                                <strong>{users.userInstagram}</strong>
                            </div>
                        </div>
                    </footer>
                    <button onClick={() => history.push('/editProfile')} className="editar">Editar Perfil</button>

        </div>
    )
}