import PostModifier from "../../components/PostModifier"

function Modifier() {
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