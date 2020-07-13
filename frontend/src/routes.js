import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Main from './pages/Main';
import Profile from './pages/Profile';


export default function Routes() {
    return(
        <BrowserRouter>
            <Route path="/" exact component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/user/:id/:token" component={Main} />
            <Route path="/profile/:token" component={Profile} />
        </BrowserRouter>
    );
}