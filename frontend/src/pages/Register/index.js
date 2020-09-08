
import { Container, Title, Header, ArrowBack } from './styles.js';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//Serviços
import api from '../../services/api';
//Componentes
import FormUser from "../../components/FormUser";
//imagens
import logo from '../../assets/logo.png';
import arrowBack from '../../assets/arrowBack.png';
export default function Register({ history }) {

    const [form] = useState({
        username: '',
        password: '',
        password2: '',
        email: '',
        userInstagram: '',
        age: '',
        route: 'Todas as Rotas',
        route2: 'Todas as Rotas',
        champion: '',
        champion2: '',
        champion3: ''
    });

    async function handleSubmit(formStateChild) {
        await api.post('/user', {
            username: formStateChild.username,
            summonerName: formStateChild.username,
            password: formStateChild.password,
            email: formStateChild.email,
            instagram: formStateChild.userInstagram,
            age: formStateChild.age,
            route: formStateChild.route,
            route2: formStateChild.route2,
            champion: formStateChild.champion,
            champion2: formStateChild.champion2,
            champion3: formStateChild.champion3

        });
        history.push('/');
    }

    return (
        <Container>
            <Header>
                <Link to='/'>
                    <ArrowBack src={arrowBack} alt="Voltar" />
                </Link>
                <img src={logo} alt="MeuDuo" />
            </Header>
            <Title>Registre-se</Title>
            <FormUser formStateParent={form} onSave={handleSubmit}></FormUser>
        </Container>

    );
}