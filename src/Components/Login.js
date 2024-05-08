import React from 'react';
import "./Login.css";
import logo from "../images/loginlogo2.png";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import { useState } from "react";



function Login() {
    const history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = (event) => {
        event.preventDefault();   // this stops page to refresh
        //now login logic here

        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                // Loggged in, redirect to home page...
                history.push("/");  // it is redirect
            })
            .catch((e) => alert(e.message));
    }

    const register = (event) => {
        event.preventDefault();   // this stops page to refresh
        //now register logic here

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // created a user and logged in, redirect to home page...
                history.push("/");
            })
            .catch((e) => alert(e.message));
    }



    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src={logo} alt="logo for back to home" />
            </Link>

            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
                    <button onClick={login} type="submit" className="login__signinbtn">Sign In</button>
                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <button onClick={register} className="login__registerbtn">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login;
