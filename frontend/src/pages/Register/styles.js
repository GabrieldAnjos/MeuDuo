import styled from 'styled-components';
import img from '../../assets/Nunu_0.jpg';

export const Background = styled.div`
    height: 100%;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
`;

export const Container = styled.div`
    height: 100%;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 100% );
    
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



export const Title = styled.h1`
    color: var(--white);
    border-bottom: 5px solid;
    border-bottom-color: var(--blueLight);
    
    text-align: center;
    margin-top: 20px;
    margin-bottom: 60px;
    
    font-family: var(--fontSystem);
    font-size: 40px;
    font-style: normal;
    letter-spacing: 0.9px;
    font-weight: 100;
`;









