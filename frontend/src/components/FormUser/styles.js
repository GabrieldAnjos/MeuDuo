import styled from 'styled-components';


export const Container = styled.div`
    width: 100%;
    
    display: flex;
    justify-content: center;
    align-items: center;  
`;

export const Form = styled.form`
    height: 500px;
    width: 80%;
    
    display: flex;
    flex-direction: column; 
    flex-wrap: wrap;   
    align-items: center;  
`;

export const ChampsContainer = styled.div`
    width: 520px;
    
    display: flex;
    gap: 20px;
`;

export const SubTitle = styled.h2`
    color: var(--white);


    align-self: flex-start;
    margin-top: 15px;
    margin-left: 90px;

    font-family: var(--fontSystem);
    font-size: 20px;
    letter-spacing: 0.9px;
    font-weight: normal;
`;

export const RoutesContainer = styled.div`
    width: 520px;
    
    display: flex;
    justify-content: center;
`;



export const Button = styled.button`
    height: 50px;
    width: 160px;
    border-radius: 5px;
    border: 2px solid var(--white);
    background: var(--grey);
    color: var(--white);
    cursor: pointer;
    
    position: absolute;
    right: 15%;
    bottom:5%;

    font-family: var(--fontSystem);
    font-size: 22px;
    letter-spacing: 0.9px;

    transition: background 0.5s;

    &:hover {
        background: var(--blue);
  }
`;










