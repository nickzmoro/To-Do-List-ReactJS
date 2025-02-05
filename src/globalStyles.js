import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        overflow-x: hidden;
    }

    * {
        font-family: "Roboto", sans-serif;
    }

    @media screen and (max-width: 600px) {
        .sc-jqVXSH {
            font-size: 2rem;
        }

        .sc-gyycJP {
            display: flex;
            flex-direction: column;
            width: 20rem;
            gap: 10px;

            input {
                width: 92%;
            }
        }
    }
`