import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './EditProfile.css';

import api from '../services/api';

import logo from '../assets/logo.svg';


export default function EditProfile({ history, match }) {
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
                    authorization: match.params.token,
                }
            });
            
            
            setForm(user.data);
        }
        loadUser();
       
    }, [match.params.token]);

  

    
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
                authorization: match.params.token,
            }
        });

        
        history.push(`/profile/${match.params.token}`);
      
        
        
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