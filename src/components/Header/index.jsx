import { Link } from 'react-router-dom'
 
function Header() {
    return (
    <header class="titre">
        <Link class="titre__lien" to="/post">     
            <h1 class="titre__texte">Groupomania</h1>
            <i class=" titre__image fa-solid fa-globe"></i>
        </Link>
        <div class="titre__apart">
            <Link class="titre__lien" to="/publier">      
                <h2 class="titre__publier">Création de post</h2>
                <i class="titre__publier--mobile fa-solid fa-plus"></i>
            </Link>
            <Link class="titre__lien" to="/">
                <h2 class="titre__deco">Déconnexion</h2>
                <i class="titre__deco--mobile fa-solid fa-arrow-right-from-bracket"></i>      
            </Link>
        </div>   
    </header>
    )
}

export default Header