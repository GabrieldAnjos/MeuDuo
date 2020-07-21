import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useDataLogin } from '../context/DataLogin';

import './EditProfile.css';

import api from '../services/api';

import logo from '../assets/logo.svg';


export default function EditProfile({ history, match }) {
    const { authentication } = useDataLogin();

    const[form, setForm] = useState({
        username: '',
        summonerName: '',
        email: '',
        userInstagram: '',
        idade: '',
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

  

    
    async function handleSubmit(e){
        e.preventDefault();
        
        await api.put("/user/edit", {
            username: form.username,
            summonerName: form.username,
            email: form.email,
            instagram: form.userInstagram,
            idade: form.idade,
            
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
            <form onSubmit={ handleSubmit }>
                <Link to="/">
                    <img className="logo" src={ logo } alt="MeuDuo" />
                </Link>
                <input 
                    name="username"
                    placeholder="Digite seu nome de Invocador" 
                    value={form.username}
                    onChange={e => setForm({ ...form, username: e.target.value }) }           
                />
                <input 
                    name="email" 
                    placeholder="Digite seu E-mail" 
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value }) }                          
                />
                <input 
                    name="instagram" 
                    placeholder="Digite seu Instagram" 
                    value={form.userInstagram}
                    onChange={e => setForm({ ...form, userInstagram: e.target.value }) }                          
                />
                <input 
                    name="idade" 
                    placeholder="Digite sua Idade" 
                    value={form.idade}
                    onChange={e => setForm({ ...form, idade: e.target.value }) }                          
                />
                <button  type="submit" >Salvar Alteração</button>
            </form>
               
        </div>
    );
}