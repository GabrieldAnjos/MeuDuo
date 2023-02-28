import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Main from "./pages/Main";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";

import Auth from "./services/Auth";

import { isAuthenticated } from "./services/Auth.js";
import { useState } from "react";

export default function AppRoutes() {
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
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user/:id/:token" element={<Main />} />
        <Route path="/profile/:token" element={<Profile />} />
      </Routes>
    </Router>
  );
}
