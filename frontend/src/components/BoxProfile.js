import './BoxProfile.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//Serviços
import api from '../services/api';
import { useDataLogin } from '../context/DataLogin';
//Componentes
import MiniProfile from '../components/MiniProfile';

export default function BoxProfile({ history }) {

    const [user, setUser] = useState({});

    const { authentication, setAuthentication } = useDataLogin();

    useEffect(() => {
        async function loadUser() {
            const response = await api.get('/user/profile', {
                headers: {
                    authorization: authentication.token,
                }
            })
            setUser(response.data);
        }
        loadUser();

    }, [authentication]);

    function handleLogout(){
        setAuthentication({});
    }

    return (
        <div className="boxProfile-container">
            <MiniProfile profileIconId={user.profileIconId} username={user.username}></MiniProfile>
            <Link to="/profile">
                <button style={{width: 250}}>Meu Perfil</button>
            </Link>
            <Link to="/">
                <button onClick={handleLogout} style={{width: 250}}>Log Out</button>
            </Link>
            
            
        </div>
    );
}