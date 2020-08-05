import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Register.css';

import api from '../services/api';

import logo from '../assets/logo.svg';
import central from '../assets/menu-circular/central.png';
import top from '../assets/menu-circular/top.png';
import jungle from '../assets/menu-circular/jungle.png';
import mid from '../assets/menu-circular/mid.png';
import bot from '../assets/menu-circular/bot.png';
import suporte from '../assets/menu-circular/suporte.png';

export default function Register({ history }) {

    
    const[form, setForm] = useState({
            username: '', 
            password: '',
            password2: '',
            email: '',
            instagram: '',
            idade: ''
        });

    
    async function handleSubmit(e){
        e.preventDefault();
        
        const response = await api.post('/user', {
            username: form.username,
            summonerName: form.username,
            password: form.password,
            email: form.email,
            instagram: form.instagram,
            idade: form.idade
            
        });

        
        history.push('/');
        
        console.log(response.data);
        
    }

    return (

        <div className="register-container">
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
                    name="password" 
                    type="password"
                    placeholder="Digite sua Senha" 
                    value={form.password}
                    onChange={e => setForm({ ...form, password: e.target.value }) }                          
                />
                <input 
                    name="password2" 
                    type="password"
                    placeholder="Confirme sua Senha" 
                    value={form.password2}
                    onChange={e => setForm({ ...form, password2: e.target.value }) }                          
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
                    value={form.instagram}
                    onChange={e => setForm({ ...form, instagram: e.target.value }) }                          
                />
                <input 
                    name="idade" 
                    placeholder="Digite sua Idade" 
                    value={form.idade}
                    onChange={e => setForm({ ...form, idade: e.target.value }) }                          
                />
                <nav>
                    <input type="checkbox" id="check"/>
                    <label id="central" htmlFor="check"><img src={central} /></label> 
                    <a href="#"><img className="link" id="link_01" src={top} alt=""/></a>  
                    <a href="#"><img className="link" id="link_02" src={jungle} alt=""/></a>   
                    <a href="#"><img className="link" id="link_03" src={mid} alt=""/></a>   
                    <a href="#"><img className="link" id="link_04" src={bot} alt=""/></a>   
                    <a href="#"><img className="link" id="link_05" src={suporte} alt=""/></a>     
                </nav>
               
                <button type="submit" >Salvar</button>
            </form>
            
            
               
        </div>
    );
}