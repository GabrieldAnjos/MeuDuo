import React, { useState } from 'react';
import './Login.css';

import { useDataLogin } from '../context/DataLogin';

import api from '../services/api';

import logo from '../assets/logo.svg';

<<<<<<< HEAD
import Cadastrar from '../components/Cadastrar';

=======
import ChampionSelector from "../components/ChampionSelector"
>>>>>>> 853550c1b3d34b7f0e408f562d9b3b5515d793cb

export default function Login({ history }) {
    const { authentication, setAuthentication } = useDataLogin();


    const [form, setForm] = useState({ username: '', password: '' });
    const [champion, setChampion] = useState('');

    async function handleClickLogar(e){
        e.preventDefault();
        const response = await api.post('/authenticate', {
            username: form.username,
            password: form.password,

        });

        const { token, _id } = response.data;
        setAuthentication({
            token: "Bearer ".concat(token),
            idUser:_id
        });
        history.push('/user');
    }

    async function handleClickCadastrar(e){
        e.preventDefault();
        /* history.push('/register');
        const response = await api.post('/user', {
            username: form.username,
            summonerName: form.username,
            password: form.password,
<<<<<<< HEAD
            
        }); */
        
        

        //window.location.href = "https://www.instagram.com/accounts/login/?force_authentication=1&enable_fb_login=1&platform_app_id=3069624946478619&next=/oauth/authorize%3Fclient_id%3D3069624946478619%26redirect_uri%3Dhttps%3A//github.com/GabrieldAnjos/sistemaMeuDuo%26scope%3Duser_profile%2Cuser_media%26response_type%3Dcode";     
       // console.log(response.data);
        
=======

        });

        //window.location.href = "https://www.instagram.com/accounts/login/?force_authentication=1&enable_fb_login=1&platform_app_id=3069624946478619&next=/oauth/authorize%3Fclient_id%3D3069624946478619%26redirect_uri%3Dhttps%3A//github.com/GabrieldAnjos/sistemaMeuDuo%26scope%3Duser_profile%2Cuser_media%26response_type%3Dcode";     
        console.log(response.data);

>>>>>>> 853550c1b3d34b7f0e408f562d9b3b5515d793cb
    }

    function handleSelectChampion(name) {
        setChampion(name)
    }

    return (
        <div className="login-container">
            <form>
                <input
                    name="campeao"
                    placeholder="Digite o nome do campeão"
                    value={champion}
                    onChange={e => setChampion(e.target.value)}
                />
                <ChampionSelector searchingName={champion} onSelection={handleSelectChampion}></ChampionSelector>
                <img src={ logo } alt="MeuDuo"/>
                <input
                    name="username"
                    placeholder="Digite seu nome de Invocador"
                    value={form.username}
                    onChange={e => setForm({ ...form, username: e.target.value }) }
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Digite sua Senha"
                    value={form.password}
                    onChange={e => setForm({ ...form, password: e.target.value }) }
                />
                <button onClick={handleClickLogar} >Login</button>
                <button onClick={handleClickCadastrar} >Cadastrar</button>
            </form>
<<<<<<< HEAD
            <Cadastrar />               
=======

>>>>>>> 853550c1b3d34b7f0e408f562d9b3b5515d793cb
        </div>
    );
}