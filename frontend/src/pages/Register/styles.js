import styled from 'styled-components';
import img from '../../assets/nunuwilump.png';


export const Container = styled.div`
    background-image: url(${img});
    background-color:black;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Header = styled.header`
    height: 200px;
    width: 100%;
    display: flex;  
    align-items: center;
    justify-content: center;
    
`;

export const ArrowBack = styled.img`
    position: fixed;
    left: 160px;
`;

export const Title = styled.h1`
    width: 230px;
    height: 60px;
    color: #FFFFFF;
    opacity: 1;
    border-bottom: 6px solid #ddd;
    border-bottom-color: var(--blueLight);
    text-align: center;
    
    font-family: var(--fontSystem);
    font-size: 43px;
    font-style: normal;
    letter-spacing: 0.9px;
    font-weight: 100;
`;









