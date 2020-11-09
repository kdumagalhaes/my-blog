import { createGlobalStyle } from 'styled-components';

export const Reset = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
}
body, input, button, textarea {
    text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;
        font-family: 'Fira Code', monospace;
            }
body {
    background-image: url('so-white.png');
    color: ${({ theme }) => theme.colors.color3};
}        
button {
    cursor: pointer;
}
`;
