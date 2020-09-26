import { Background, BackContainer, Container } from './styles';
import React from 'react';
//Componentes
import Card from '../../components/Card';

export default function MatchModal({ user, onMatch }) {
    return (
        <Background>
            <BackContainer>
                <Container>
                    <h1>It's a Duo!!</h1>
                    <span>{`Você e ${user.username} querem jogar juntos... Bom jogo!`}</span>
                    <Card userCard={user} noBackground ></Card>
                    <button onClick={() => onMatch(null)} >Continuar na Busca</button>
                    <button onClick={() => onMatch(user)} >Mandar Msg</button>
                </Container>
            </BackContainer>
        </Background>
    );
}

