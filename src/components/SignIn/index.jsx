import axios from "axios"
import React, { useState } from "react"
import { Link } from "react-router-dom"

const SignInForm = () => {
    //On récupère la valeur de l'email et du password quand une valeur est rentrée dans le HTML
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //Fonction qui s'execute "on submit", c'est à dire lorsque l'utilisateur clique sur s'enregistrer
    const handleLogin = (e) => {
        e.preventDefault();
        const contentError = document.getElementById('contenterror')

        //Méthode POST qui passe par axios, on envoie l'email et le mot de passe
        axios({
            method: "POST",
            url: "http://localhost:5000/api/auth/login",
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
                //Si oui on le renvoie vers la page /post
                //Egalement, on stocke ses données de connexion crée par la réponse dans le local storage
                window.location = "/post";                
                let userId = res.data.userId
                console.log(res.data.userId)
                localStorage.setItem("userId", userId)
                let token = res.data.token
                console.log(res.data.token)
                localStorage.setItem("token", token)   
                setAuthToken(token);
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
                <p>Minimum 8 caractères 1 lettre et 1 nombre</p>
            </div>
            <div class="contenterror" id="contenterror"></div>
            <br />
            <Link to="/new"> 
                <p class="special__identifier">S'enregistrer ?</p>
            </Link>
            <input className="login__envoyer" type="submit" value="Se connecter" />
        </form>

    );
};

export default SignInForm

//Fonction AutToken qui va venir vérifier dans le reste de l'application si l'utilisateur est bien connecter
export const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    else
        delete axios.defaults.headers.common["Authorization"];
 }

