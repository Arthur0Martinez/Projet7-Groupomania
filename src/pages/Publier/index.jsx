import PostThing from "../../components/CreatePost"

//Page de l'application permettant à un utilisateur de crée une publication
function Publier() {
  //On vérifie que le token est bien présent avant de donner accès à l'application
  //Sinon on renvoie à la page de connexion
  let getToken = localStorage.getItem("token");
  if (getToken !== null) {
    return (
    <main>
        <h2 class="page__title">Publication de votre post</h2>
        <PostThing />
    </main>
    )
  }else{
    window.location = "/";
  }
}
export default Publier