import React, { useState } from 'react';
import { Div, Form } from './styles';
import api from '../../services/api';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            username,
            password
        }

        const result = await api(
            process.env.REACT_APP_API+"/login", 
            "POST", 
            data
        );

        console.log(result);
    }

    return (
        <Div>
            <Form onSubmit={handleSubmit}>
                <img src="https://www.flaticon.com/svg/static/icons/svg/2913/2913133.svg" alt="imagem" className="top"/>
                
                <div className="name-input">
                    <label>Usuário</label>
                    <div className="input-item">
                        <img src="https://www.flaticon.com/svg/static/icons/svg/74/74472.svg" alt="imagem"/>
                        <input 
                            type='text'
                            name="username" 
                            placeholder="Digite o seu nome de usuário"
                            onChange={(e) => setUsername(e.target.value)}
                            />
                    </div>
                </div>

                <div className="name-input">
                    <label>Senha</label>
                    <div className="input-item">
                        <img src="https://www.flaticon.com/svg/static/icons/svg/890/890163.svg" alt="imagem"/>
                        <input 
                            type='text' 
                            name="password" 
                            placeholder="Digite a sua senha"
                            onChange={(e) => setPassword(e.target.value)}
                            />
                    </div>
                </div>                

                <div className="input-item">
                    <input type="submit" value="Entrar"/>
                </div>
               
            </Form>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5000ca" fill-opacity="1" d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </Div>
        
        
    );
};

export default Login;