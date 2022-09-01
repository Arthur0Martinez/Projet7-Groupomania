import axios from "axios"
import React, { useState } from "react"
import { Link } from "react-router-dom"

const SignUpForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const contentError = document.getElementById('contenterror')
        const compteCrée = document.getElementById('comptecrée')

        axios({
            method: "POST",
            url: "http://localhost:5000/api/auth/signup",
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
                window.location = "/validnew";
                console.log(res.data)
                console.log(res.data.token)
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
        <form action="" onSubmit={handleSubmit}>
            <div class="sign__email">
                <label className="sign__email--text" htmlFor="email">Email :</label>
                <input 
                    type="text" 
                    name="email" 
                    id="email"
                    class="sign__email--textholder"
                    onChange={(e) => setEmail (e.target.value)} 
                    value={email}
                />
            </div>
            <br />
            <div class="sign__mdp">
                <label className="login__mdp--text" htmlFor="password">Mot de passe :</label>
                <input 
                    type="password" 
                    name="password" 
                    id="password"
                    class="sign__mdp--textholder"
                    onChange={(e) => setPassword (e.target.value)} 
                    value={password}
                />
            </div>
            <div class="contenterror" id="contenterror"></div>
            <div id="comptecrée"></div>
            <br />
            <Link to="/"> 
                <p class="special__identifier">Se connecter ?</p>
            </Link>
            <input className="sign__envoyer" type="submit" value="S'enregistrer" />
        </form>

    );
};

export default SignUpForm


