import axios from 'axios';
import { element } from 'prop-types';
import { setAuthToken } from "../../components/SignIn";
import getOnePost from '../../components/GetOnePost';
import getOnePostNotAuth from '../../components/GetOnePostNotAuth';
import likeAndDislike from '../../components/LikeAndDislike';
import deleteOnePost from '../../components/DeleteOnePost';
import modifyOnePost from '../../components/ModifyOnePost';

//Page de l'application qui affiche la publication séléctionnée par l'utilisateur
function Afficher() {
    let newUrl = new URL(window.location.href);
    let idProduct = newUrl.searchParams.get("id");
    let token = localStorage.getItem("token");
    let userId = localStorage.getItem("userId");
    //On vérifie que le token est bien présent avant de donner accès à l'application
    //Sinon on renvoie à la page de connexion
    if (token) {
        setAuthToken(token);
    }else{
        window.location = "/";
    }  
    //A l'aide de la méthode GET on vient récupérer les données de la publication séléctionnée
    axios({
        method: "GET",
        url: `http://localhost:5000/api/publication/${idProduct}`,
    })
    //On execute toutes les fonctions concernés dans la réponse
    .then(function (res) {
        //Si l'utilisateur à crée la publication il aura accès aux boutons modifier et supprimer
        //Mise en place d'un utilisateur admin qui a les droits de suppréssion et de modification sur toutes les publications
        if(res.data.userId === userId || userId === process.env.REACT_APP_ADMIN_KEY){
            getOnePost(res.data);
        //Sinon il n'aura que la possibiliter de liker/disliker la publication
        }else{
            getOnePostNotAuth(res.data);
        }
        likeAndDislike(res.data);
        deleteOnePost(res.data);
        modifyOnePost(res.data);
    })

    return (
    <main>
        <section class="selectpost" id='Post'>
            
        </section>
    </main>
    )
}

export default Afficher