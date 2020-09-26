import styled, { css } from 'styled-components';
import img from '../../assets/wallpaper.jpg';

export const Background = styled.div`
    height: 100%;
    width: 100%;
    background-image: url(${img});
`;

export const Container = styled.div`
    height: 100%;
    width:100%; 
    background-color: rgba(0, 0, 0, 0.4);

    display: flex;
    flex-direction: column;
    text-align: center;

    button {
        height: auto;
        width: auto;
        color: #fff;
        cursor: pointer;
    }
`;

export const Carousel = styled.div`
    display: flex;
    justify-content: center;

    .slick-initialized {
        width:40%;   
        
    }

    .slick-slide {
        visibility: hidden;
        padding: 0px;
    }

    .slick-list {
       padding: 0px;
    }

    .slick-active {
        position: relative;
        right: 50px;
        z-index: 1;
        visibility: visible;
        opacity: 0.3 !important;
        transform: scale(0.5);

        button {
            visibility: hidden;
        }
    }

    .slick-current {
        opacity: 1 !important;
        position: relative;
        z-index: 2;
        transition: transform 1s;
        transform: scale(1);
        right: 110px;
        
        button {
            visibility: visible;
        }
    }
 
`;

export const ElementCarousel = styled.div`
    height: 500px;
    width: 400px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
    
`;

export const ButtonsCarousel = styled.div`
    width: 400px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;

    button {
        height: 50px;
        width: 50px;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.05);
        border-radius: 4px;
        background-color: rgba(0, 0, 0, 0.6);
        cursor: pointer;
        
        border: 0;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
            transform: translateY(-5px);
            transition: all 0.2s;  
        }
    }
`;

export const ChatBox = styled.div`
    padding: 0px;
    margin: 0px;
    position: fixed;
    left: 0;
    bottom: 0;
    /* background-color: #f5f5f5; */

    ul {
        list-style-position: inside;
        display: flex;

        li {
            list-style-type: none;
        }
    }


`;

export const Empty = styled.div`
    font-size: 32px;
    color: #999;
    font-weight: bold;
    margin-top: 300px;
`;


