import { createGlobalStyle } from 'styled-components';

const globalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #fff;
}

input, h1, p, button, form, span {
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
}
`

export default globalStyle;