import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import ReactDOM from "react-dom";
import Connexion from './pages/Connexion'
import Identifier from './pages/Identifier'
import IdentificationRéussi from './pages/IdentificationReussi';
import Post from './pages/Posts'
import Afficher from './pages/Afficher'
import Modifier from './pages/Modifier'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './components/Error'
import './styles/main.scss'
import Publier from './pages/Publier'
import { setAuthToken } from './components/SignIn'

//Dans le Router on vient mettre toutes les routes qui ont été crées dans notre App React
//On les affiche toutes en fonction de l'url rentré
ReactDOM.render(
        <Router>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Connexion />
                </Route>
                <Route path="/new">
                    <Identifier />
                </Route>
                <Route path="/validnew">
                    <IdentificationRéussi />
                </Route>
                <Route path="/post">
                    <Post />
                </Route>
                <Route path="/afficher">
                    <Afficher />
                </Route>
                <Route path="/publier">
                    <Publier />
                </Route>
                <Route path="/modifier">
                    <Modifier />
                </Route>
                <Route>
                    <Error />
                </Route>
            </Switch>
            <Footer />
        </Router>,
document.getElementById('root')
)

//Fonction TimeOut qui va venir déconnecter l'utilisateur après 30min d'absence
function timeOutToken(){
    localStorage.clear()
    window.location = "/";
}

setTimeout(timeOutToken, 1800000);
