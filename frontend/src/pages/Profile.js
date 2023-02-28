import './Profile.css';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
//Serviços
import { useDataLogin } from '../context/DataLogin';
import api from '../services/api';
//Componentes
import Card from '../components/Card';
//Imagens
import logo from '../assets/logo.svg';

export default function Profile() {
    const navigate = useNavigate();

    const { authentication } = useDataLogin();

    const [users, setUsers] = useState({
        league_obj: {
            solo: {},
            flex: {}
        }
    });

    useEffect(() => { console.log(users) }, [users]);

    useEffect(() => {
        async function loadUsers() {
            const response = await api.get('/user/profile', {
                headers: {
                    authorization: authentication.token,
                }
            });
            //Formata dados do elo
            //-----------------------------
            //Nomes simplificados
            const queueRename = {
                RANKED_SOLO_5x5: "solo",
                RANKED_FLEX_SR: "flex"
            }

            //Transforma vetor em obj para facilitar a busca como chave-valor
            const league_obj = {}
            response.data.league.forEach(({ queueType, tier, rank }) => {
                league_obj[queueRename[queueType]] = { tier, rank }
            })
            //adiciona informação de unranked caso não exista a queue
            league_obj.solo = league_obj.solo || { tier: 'Unranked', rank: '' }
            league_obj.flex = league_obj.flex || { tier: 'Unranked', rank: '' }

            response.data.league_obj = league_obj

            //--------------------------------------
            

            setUsers(response.data);
        }

        loadUsers();
    }, [authentication]);


    return (
        <div className="profile-container">
            <Link to="/">
                <img className="logo" src={logo} alt="MeuDuo" />
            </Link>
            <Card userCard={users} ></Card>
            <button onClick={() => navigate('/editProfile')} className="editar">Editar Perfil</button>

        </div>
    )
}