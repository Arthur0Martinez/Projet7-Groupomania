import { Link } from "react-router-dom"

function IdentificationRéussi() {
    return (
      <section class="created">
          <h2 class="created__titre created__titre--validé">Compte crée, vous pouvez vous connecter</h2>
          <Link to="/">
              <input className="created__envoyer created__envoyer--validé" type="submit" value="Se connecter" />
          </Link>
      </section>
    )

}

export default IdentificationRéussi