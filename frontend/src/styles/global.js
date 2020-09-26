import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        background: #000000;
    }

    body, input, button {
        font-family: sans-serif;
    }

    :root {
        --blue: #54ACAE;
        --blueLight: #48ECFF;
        --black: #000000;
        --grey: #9F9F9F;
        --greyLight: #DBDBDB;
        --white: #FFFFFF;
        --gold: #997530;
        --goldLight: #C8AA6E;


        --fontSystem: "Acumin Variable Concept", sans-serif;
        --fontUsers: 'Montserrat', sans-serif;
    }
`;