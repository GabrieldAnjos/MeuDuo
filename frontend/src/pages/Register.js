import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Register.css';

import api from '../services/api';

import ChampionSelector from "../components/ChampionSelector";

import RouteSelector from "../components/RouteSelector";

import logo from '../assets/logo.svg';


export default function Register({ history }) {


    const [form, setForm] = useState({
        username: '',
        password: '',
        password2: '',
        email: '',
        instagram: '',
        idade: '',
        route: '',
        allRoute: '',
       
    });

    const [champion, setChampion] = useState('');
    const [route, setRoute] = useState('');


    async function handleSubmit(e) {
        e.preventDefault();

        /* const response = await api.post('/user', {
            username: form.username,
            summonerName: form.username,
            password: form.password,
            email: form.email,
            instagram: form.instagram,
            idade: form.idade,
            route: form.route,
            allRoute: form.allRoute

        }); */


        history.push('/');

        console.log(form);

    }

    function handleSelectChampion(name) {
        setChampion(name)
    }

    function handleSelectRoute(route) {
        setForm({ ...form, route: route })
    }

    return (

        <div className="register-container">
            <form onSubmit={handleSubmit}>
                <Link to="/">
                    <img className="logo" src={logo} alt="MeuDuo" />
                </Link>
                <input
                    name="username"
                    placeholder="Digite seu nome de Invocador"
                    value={form.username}
                    onChange={e => setForm({ ...form, username: e.target.value })}
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Digite sua Senha"
                    value={form.password}
                    onChange={e => setForm({ ...form, password: e.target.value })}
                />
                <input
                    name="password2"
                    type="password"
                    placeholder="Confirme sua Senha"
                    value={form.password2}
                    onChange={e => setForm({ ...form, password2: e.target.value })}
                />
                <input
                    name="email"
                    placeholder="Digite seu E-mail"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                />
                <input
                    name="instagram"
                    placeholder="Digite seu Instagram"
                    value={form.instagram}
                    onChange={e => setForm({ ...form, instagram: e.target.value })}
                />
                <input
                    name="idade"
                    placeholder="Digite sua Idade"
                    value={form.idade}
                    onChange={e => setForm({ ...form, idade: e.target.value })}
                />
                <input
                    name="campeao"
                    placeholder="Digite o nome do campeão"
                    value={champion}
                    onChange={e => setChampion(e.target.value)}
                />
                <ChampionSelector searchingName={champion} onSelection={handleSelectChampion}></ChampionSelector>
                <RouteSelector onSelection={handleSelectRoute}></RouteSelector>

                

                <button type="submit" >Salvar</button>
            </form>



        </div>
    );
}