import Styled from 'styled-components';

const Div = Styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    background: #fff;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    svg {
        width: 100%;
        background: #fff;
        position: absolute;
        left: 0;
        bottom: 0;
    }

    .name-input {
        width: 100%;
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .name-input label {
        width: 85%;
        text-align: left;
        display: flex;
        margin-top: 10px;
    }

    .input-item:first-of-type {
        margin-top: 20px;
    }

    .input-item {
        height: 50%;
        width: 100%;
        display: flex;
        align-items: center;
        
        justify-content: center;
    }

    .input-item input[type="submit"] {
        border-radius: 50px;
        background-color: #5000ca;
        color: #fff;
        font-size: 20px;
        font-weight: 700px;
    }

    .input-item input[type="submit"]:hover {
        cursor: pointer;
    }

    img {
        width: 40px;
        height: 40px;
        padding: 5px;
        background-color: #5000ca;
    }

    input {
        width: 80%;
        height: 40px;
        padding-left: 20px;
        border: none;
        background-color: azure;
        border-bottom-right-radius: 20px;
        border-top-right-radius: 20px;
    }

    input:focus {
        border: 2px solid #5000ca;
    }

`

const Form = Styled.form`
    display: flex;
    width: 70%;
    min-height: 400px;
    height: 60%;
    border-radius: 30px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;
    margin-bottom: 200px;

    box-shadow: 0px 2px 88px -56px rgba(0,0,0,0.52);
    -webkit-box-shadow: 0px 2px 88px -56px rgba(0,0,0,0.52);
    -moz-box-shadow: 0px 2px 88px -56px rgba(0,0,0,0.52);

    .top {
            width: 70px;
            height: 70px;
            background-color: transparent;
            margin-top: 30px;
        }

`

export { Div, Form }