import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './EditProfile.css';
//Serviços
import api from '../services/api';
import { useDataLogin } from '../context/DataLogin';
//Componentes
import FormUser from '../components/FormUser';
//Imagens
import logo from '../assets/logo.svg';

export default function EditProfile({ history, match }) {
    const { authentication } = useDataLogin();
    const [form, setForm] = useState({
        username: '',
        password: '',
        password2: '',
        email: '',
        userInstagram: '',
        age: '',
        route: 'Nenhuma',
        route2: 'Nenhuma',
        champion: '',
        champion2: '',
        champion3: ''
    });

    useEffect(() => {
        async function loadUser() {
            const user = await api.get('/user/profile', {
                headers: {
                    authorization: authentication.token,
                }
            });

            setForm(user.data);
        }
        loadUser();

    }, [authentication]);

    async function handleSubmit(formStateChild) {

        await api.put("/user/edit", {
            username: formStateChild.username,
            summonerName: formStateChild.username,
            email: formStateChild.email,
            instagram: formStateChild.userInstagram,
            age: formStateChild.age,
            route: formStateChild.route,
            route2: formStateChild.route2,
            champion: formStateChild.champion,
            champion2: formStateChild.champion2,
            champion3: formStateChild.champion3
        },
            {
                headers: {
                    authorization: authentication.token,
                }
            });

        history.push('/profile');
    }

    return (

        <div className="editProfile-container">
            <Link to="/">
                <img className="logo" src={logo} alt="MeuDuo" />
            </Link>
            <FormUser formStateParent={form} onSave={handleSubmit}></FormUser>
        </div>
    );
}