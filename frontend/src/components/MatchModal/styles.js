import styled from 'styled-components';
//Imagens
import img from '../../assets/nunuWillumppng.png';

export const Background = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: rgba(200, 200, 200, 0.8);

    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 1;
    

`;

export const BackContainer = styled.div`
    height: 80%;
    width: 37%;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-position: center;
`;

export const Container = styled.div`
    height: 100%;
    width:100%; 
   
    background: rgba(10, 10, 10, 0.93);
    border: 1px solid darkslategrey;
    padding: 10px;
    border-radius: 40px;

    font-family: var(--fontUsers);
    color: var(--white);

    display: flex;
    flex-direction: column;
    align-items: center;

    

    h1 {
        font-size: 55px;
        margin-bottom: 15px;
    }
    
    span {
        font-size: 20px;
        margin-bottom: 10px;
    }

    button {
        height: 55px;
        width: 45%;
        background-color: var(--white);
        color: var(--black);
        border-radius: 40px;
        border: 0;
        background-color: var(--white);
        box-shadow: 2px 2px grey;

        text-align: center;
        margin-bottom: 15px;

        font-size: 20px;
    }

`;
        


