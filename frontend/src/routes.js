import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Main from './pages/Main';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';

import Auth from './services/Auth';

import { isAuthenticated } from './services/Auth.js';
import { useState } from 'react';

export default function Routes() {
    /* const [taLogado, SetTaLogado] = useState(false);
 */
    /* const PrivateRoute = ({ component: Component, ...rest }) => (

        <Route
            {...rest}
            render={props =>
                taLogado ? (
                    <Component {...props} />
                ) : (
                        <Redirect to={{ pathname: "/profile", state: { from: props.location } }} />
                    )

            }
        />
    ); */


    return (

        <BrowserRouter>
            {/* <Auth isAuth={log => SetTaLogado(log)}></Auth> */}
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/user" component={Main} />
                <Route path="/profile" component={Profile} />
                <Route path="/editProfile" component={EditProfile} />
            </Switch>
        </BrowserRouter>
    );
}