import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import GlobalStyle from '../assets/styles/global';

import Login from '../pages/Login/login';
import Home from '../pages/Home/home'

const routes = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/Login" component={Login}/>
                </Switch>
            </BrowserRouter>
            <GlobalStyle/>
        </>
    )
}

export default routes;