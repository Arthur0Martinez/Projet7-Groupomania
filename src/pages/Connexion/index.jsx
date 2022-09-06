import SignInForm from "../../components/SignIn"

//Page de connexion de l'application
function Connexion() {
  return (
    <section class="login">
    <h2 class="login__titre">Se connecter</h2>
    <ul>
        <SignInForm />
    </ul>
</section>
  )
}

export default Connexion
