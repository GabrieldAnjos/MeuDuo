import React, { useState } from 'react';
import styled from 'styled-components'
import './Login.css';


import { useDataLogin } from '../context/DataLogin';

import api from '../services/api';

import background from '../assets/Nunu_0.jpg';

import login_acc from '../assets/login_account.svg';
import login_pass from '../assets/login_pass.svg';

const ContainerInput = styled.div`
    background-color : white;
    border-radius: 5px;
    height: auto;
    width: 50vh;
    display: flex;
    margin: 15px;
`

const Input = styled.input`
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    color: black;
    background-color : transparent; 
    height: auto;
    width: 100%;
    padding: 10px 10px 10px 20px;
    border: 0px;
    &::placeholder{
        color: #AAA;
    }
`;

const LoginIcon = styled.img`
    height: 36px;
    width: 36px;    
    padding: 5px;
    align-self:center;
    color:white;
`

const ButtonLogin = styled.button`
    font-family: 'Montserrat', sans-serif;
    font-size: 22px;
    color: white;
    background-color: #d7553e;
    border-radius: 10px;
    border: 0px;
    padding: 10px 20px;
    margin: 15px;
    &:hover{
        box-shadow: 0px 0px 10px #fff6;
        text-shadow: 0px 0px 10px #fff6;
    }
    transition:0.4s;
`

const ContainerForm = styled.div`
    padding: 10px;
    position: fixed;
    top: 30%;
    left: 8%;
`

const Underline = styled.div`

    background: gray;
    height: 4px;
    width:100%;
    transition: 0.5s;
    padding: 0px;
`

const UnderlineBar = styled.div`
    background: #48ECFF;
    width: 0px;
    height: 100%;
    margin: 0px;
    transition: width 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    float: ${props => props.side};
`


const ContainerLink = styled.div`
    margin: 15px;
    cursor: default;
    display: inline-block;
    &:hover{
        ${UnderlineBar}{
            width:100%;
        }
        a{
            color: white;
        }
    }
    a{
        color: #DDD;
        font-family: 'Montserrat', sans-serif;
        font-size: 20px;
    }
`

const BackFrame = styled.img`
    min-height: 100%;
    min-width:100%;
    z-index: -1;
    margin: 0px;
    position: relative;
    margin-left: 50%;
    transform: translateX(-50%);

`

const BackShadow = styled.div`
    background-image: linear-gradient(to right, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 60% );
    height: 100%;
    width: 100%;
    padding: 0px;
    overflow: hidden;
`

export default function Login({ history }) {
    const { setAuthentication } = useDataLogin();


    const [form, setForm] = useState({ username: '', password: '' });

    async function handleClickLogar(e) {
        e.preventDefault();
        const response = await api.post('/authenticate', {
            username: form.username,
            password: form.password
        });

        const { token, _id } = response.data;
        setAuthentication({
            token: "Bearer ".concat(token),
            idUser: _id
        });
        history.push('/user');
    }

    async function handleClickCadastrar(e) {
        e.preventDefault();
        history.push('/register');
    }

    return (
        <>
            <BackShadow>
                <BackFrame src={background} />
            </BackShadow>
            <ContainerForm>
                <ContainerLink>
                    <a>Login</a>
                    <Underline>
                        <UnderlineBar side="right"/>
                    </Underline>
                </ContainerLink>

                <ContainerLink>
                    <a onClick={handleClickCadastrar} >Cadastrar</a>
                    <Underline>
                        <UnderlineBar side="left"/>
                    </Underline>
                </ContainerLink>

                <form>
                    <ContainerInput>
                        <LoginIcon src={login_acc} alt="Invocador" />
                        <Input
                            name="username"
                            placeholder="Login"
                            value={form.username}
                            onChange={e => setForm({ ...form, username: e.target.value })}
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <LoginIcon src={login_pass} alt="Senha" />
                        <Input
                            name="password"
                            type="password"
                            placeholder="Senha"
                            value={form.password}
                            onChange={e => setForm({ ...form, password: e.target.value })}
                        />
                    </ContainerInput>
                    <ButtonLogin onClick={handleClickLogar} >Entrar</ButtonLogin>
                </form>
            </ContainerForm>
        </>
    );
}