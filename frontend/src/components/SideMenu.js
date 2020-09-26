import React from 'react';
import styled from 'styled-components'
import '../assets/fonts.css'
import backgroundSide from '../assets/BackgroundSide.png';
//Componentes
import BoxProfile from '../components/BoxProfile';
import MatchList from '../components/MatchList'

const Container = styled.div`
    height: 100vh;
    width: 250px;
    position: fixed;
    right: 0;
    top: 0;
    padding-top: 15px;
    margin: 0px;
    background-image: url("${backgroundSide}");
    background-color: black;
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover;

    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
`

const Footer = styled.div`
    flex: 1;
    width:100%;
    padding: 10%;
    p{
        cursor: pointer;
        margin: 10px;
        font-family: 'Montserrat', sans-serif;
        font-size: 0.8em;
        color: white;
    }
`

export default function SideMenu({matchList, chatFriendsId}) {

    return (
        <Container>
            {/* <BackFrame src={background}/> */}
            <BoxProfile/>
            <MatchList chatFriendsId={chatFriendsId} matchList={matchList} ></MatchList>
            <Footer>
                <p>Ajuda</p>
                <p>Info</p>
                <p>Segurança</p>
            </Footer>
        </Container>
    );
}