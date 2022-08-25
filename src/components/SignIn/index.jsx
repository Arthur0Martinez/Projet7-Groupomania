import axios from "axios"
import React, { useState } from "react"
import { Link } from "react-router-dom"

const SignInForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        const contentError = document.getElementById('contenterror')

        axios({
            method: "POST",
            url: "http://localhost:5000/api/auth/login",
            data: {
                email,
                password,
            },
        })
        .then((res) => {
            console.log(res)
            let emailValue = document.getElementById('email').value
            let passwordvalue = document.getElementById('password').value

            if ( /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/i.test(emailValue) &&
                   /^[A-Za-z0-9'\.\-\s\,]+$/i.test(passwordvalue)) {
                window.location = "/post";
                let userIdtk = JSON.stringify(res.data.userId)
                console.log(res.data.userId)
                localStorage.setItem("userId", userIdtk)
                let token = JSON.stringify(res.data.token)
                console.log(res.data.token)
                localStorage.setItem("token", token)                   
            } else {
                contentError.innerHTML = "Erreur dans la saisie"
            }
        })
        .catch((err) => {
            console.log(err);
            contentError.innerHTML = "Erreur dans la saisie"
        })
    }

    return (
        <form action="" onSubmit={handleLogin}>
            <div class="login__email">
                <label className="login__email--text" htmlFor="email">Email :</label>
                <input
                    type="text" 
                    name="email" 
                    id="email"
                    class="login__email--textholder"
                    onChange={(e) => setEmail (e.target.value)} 
                    value={email}
                />
            </div>
            <br />
            <div class="login__mdp">
                <label className="login__mdp--text" htmlFor="password">Mot de passe :</label>
                <input
                    type="password" 
                    name="password" 
                    id="password"
                    class="login__mdp--textholder"
                    onChange={(e) => setPassword (e.target.value)} 
                    value={password}
                />
            </div>
            <div id="contenterror"></div>
            <br />
            <Link to="/new"> 
                <p class="special__identifier">S'enregistrer ?</p>
            </Link>
            <input className="login__envoyer" type="submit" value="Se connecter" />
        </form>

    );
};

export default SignInForm


