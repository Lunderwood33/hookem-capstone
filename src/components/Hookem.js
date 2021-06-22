import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
// import { NavBar } from "./navigation/NavBar";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import "./auth/Login.css";
// import logo from './logo.svg';
import './Hookem.css';

export const Hookem = () => (
  <>

    <Route
      render={() => {
        if (localStorage.getItem("hookem_user_id")) {
          return (
            <>
              {/* <NavBar /> */}
              <ApplicationViews />
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
);
