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
        --blueLight: #48ECFF;
        --black: #000000;
        --white: #FFFFFF;

        --fontSystem: "Acumin Variable Concept", sans-serif;
        --fontUsers: 'Montserrat', sans-serif;
    }
`;