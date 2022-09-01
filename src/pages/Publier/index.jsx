import PostThing from "../../components/Post"

function Publier() {
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