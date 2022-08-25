import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import ReactDOM from "react-dom";
import Connexion from './pages/Connexion'
import Identifier from './pages/Identifier'
import IdentificationRéussi from './pages/IdentificationReussi';
import Post from './pages/Post'
import Afficher from './pages/Afficher'
import Modifier from './pages/Modifier'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './components/Error'
import './styles/main.scss'
import Publier from './pages/Publier'

ReactDOM.render(
    <React.StrictMode>
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
        </Router>
    </React.StrictMode>,
document.getElementById('root')
)