import { Container, Arrow } from './styles';
import React from 'react';
import { Link } from 'react-router-dom';
//Componentes
import Logo from '../Logo';


export default function Header({ arrowBack }) {
    console.log(arrowBack);
    return (
        <Container>
            {arrowBack && (
                <Link to='/'>
                    <Arrow alt="Voltar" title="Voltar" />
                </Link>
            ) 
            }
            <Logo />
        </Container>
    );

}