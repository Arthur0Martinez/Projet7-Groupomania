import React from 'react';
import { Link } from 'react-router-dom'

//Header qui s'affiche sur toutes les pages. Se modifie en fonction de si l'utilisateur est connecté ou non
const Header = () => {
    //
    let getToken = localStorage.getItem("token");
    console.log(getToken)
    //On vérifie le token de l'utilisateur pour savoir si il est connecté.
    //Si il l'est on affiche le Header complet
    if (getToken !== null) {

        return (
            <header class="titre">
                <Link class="titre__lien" to="/post">     
                    <h1 class="titre__texte">Groupomania</h1>
                    <i class=" titre__image fa-solid fa-globe"></i>
                </Link>
                <nav class="titre__apart">
                    <Link class="titre__lien" to="/publier">      
                        <h2 class="titre__publier">Création de post</h2>
                        <i class="titre__publier--mobile fa-solid fa-plus"></i>
                    </Link>
                    <Link class="titre__lien" id="deco" to="/" onClick={() => localStorage.clear() + window.location.reload()}>
                        <h2 class="titre__deco">Déconnexion</h2>
                        <i class="titre__deco--mobile fa-solid fa-arrow-right-from-bracket"></i>
                    </Link>
                </nav>   
            </header>
        );
    //Si l'utilisateur n'est pas connecté on limite son accès aux fonctionnalités du Header. 
    //Par exemple la création de publication ou la déconnexion
    }else {
        return (
            <header class="titre">
                <h1 class="titre__texte titre__texte--notlog">Groupomania</h1>
                <i class="titre__image titre__image--notlog fa-solid fa-globe"></i>
            </header>
        );;
    }
    

}
 
export default Header;
