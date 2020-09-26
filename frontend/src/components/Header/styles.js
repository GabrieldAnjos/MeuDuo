import styled from 'styled-components';
import ArrowBack from '@material-ui/icons/ArrowBack'

export const Container = styled.div`
    height: 200px;
    width: 100%;
    
    display: flex;  
    align-items: center;
    justify-content: center; 
`;

export const Arrow = styled(ArrowBack)`
    height: 45px !important;
    width: 45px !important;
    color: var(--blueLight);
    position: fixed;
    left: 10%;
`;