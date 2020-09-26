import { Container, Arrow } from './styles';
import React from 'react';
import { Link } from 'react-router-dom';
//Componentes
import Logo from '../Logo';
//Imagens
import arrow from '../../assets/arrowBack.png';

export default function Header({ arrowBack }) {
    console.log(arrowBack);
    return (
        <Container>
            {arrowBack && (
                <Link to='/'>
                    <Arrow src={arrow} alt="Voltar" />
                </Link>
            ) 
            }
            <Logo />
        </Container>
    );

}