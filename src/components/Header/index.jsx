import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    let getToken = localStorage.getItem("token");
    console.log(getToken)
    
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
