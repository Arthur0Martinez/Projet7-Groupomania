import SignUpForm from "../../components/SignUp"

//Page qui permet de s'identifier pour la première fois sur le site
function Identifier() {
  return (
    <section class="sign">
      <h2 class="sign__titre">S'enregistrer</h2>
      <ul>
          <SignUpForm />
      </ul>
    </section>
  )
}

export default Identifier