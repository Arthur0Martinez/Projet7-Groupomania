import axios from "axios"
import React, { useState } from "react"
import { Link } from "react-router-dom"

const SignUpForm = () => {
    //On récupère la valeur de l'email et du password quand une valeur est rentrée dans le HTML
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //Fonction qui s'execute "on submit", c'est à dire lorsque l'utilisateur clique sur s'enregistrer
    const handleSubmit = (e) => {
        e.preventDefault();
        const contentError = document.getElementById('contenterror')

        //Méthode POST qui passe par axios, on envoie l'email et le mot de passe
        axios({
            method: "POST",
            url: "http://localhost:5000/api/auth/signup",
            data: {
                email,
                password,
            },
        })
        //On vient récupérer la réponse de l'API
        .then((res) => {
            console.log(res)
            let emailValue = document.getElementById('email').value
            let passwordvalue = document.getElementById('password').value

            //Avec l'utilisation des REGEX on vient vérifier que les données écrites par l'utilisateur sont valides.
            if ( /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/i.test(emailValue) &&
                 /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i.test(passwordvalue)) {
                //Si oui on le renvoie vers la page /validnew
                //L'utilisateur pourra désormais se connecter à l'application
                window.location = "/validnew";
                console.log(res.data)
                console.log(res.data.token)
            //Message d'erreur en cas de problème avec le contenu
            } else {
                contentError.innerHTML = "Erreur dans la saisie"
            } 
        })
        //Message d'erreur en cas de problème avec la réponse API
        .catch((err) => {
            console.log(err);
            contentError.innerHTML = "Erreur dans la saisie"
        })
    }

    //Formulaire présent dans le HTML
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
                <p login__mdp--text>Minimum 8 caractères 1 lettre et 1 nombre</p>
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


