import { setAuthToken } from "../../components/SignIn";
import GetPost from '../../components/GetAllPost';

//Page de l'application permettant d'afficher tout les posts existant des utilisateurs
function Post() {  
    //On vérifie que le token est bien présent avant de donner accès à l'application
    //Sinon on renvoie à la page de connexion
    let token = localStorage.getItem("token");
    if (token) {
        setAuthToken(token);
    }else{
        window.location = "/";
    }
    return (
        <main>
            <h2 class="page__title">Posts de la communauté</h2>
            <section class="allpost" id="items">
                <GetPost />
            </section>
        </main>
        )

}

export default Post