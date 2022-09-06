import PostModifier from "../../components/ModifyPost"

//Page permettant de modifier les publications faites par l'utilisateur
function Modifier() {
  //On vérifie que le token est bien présent avant de donner accès à l'application
  //Sinon on renvoie à la page de connexion
  let getToken = localStorage.getItem("token");
  if (getToken !== null) {
    return (
      <main>
          <h2 class="page__title">Modification de votre post</h2>
          <PostModifier />
      </main>
    )
  }else{
    window.location = "/";
  }
}
export default Modifier