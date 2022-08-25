import Desert from '../../assets/desert.png'
import { Link } from "react-router-dom"

function Afficher() {
    return (
    <main>
        <section class="selectpost">
            
            <div class="post post--sanshover">
                <h3 class="post__titre">Mes vacances au désert c'était vraiment trop beau</h3>
                <img class="post__img" src={Desert} alt="post"/>
                <p class="post__text">Description du post Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, libero assumenda quae ipsa, necessitatibus debitis expedita commodi molestias dolorem a dolores ducimus est sequi ad quibusdam! Eum in inventore mollitia?</p>
                <div class="post__touslesbtn">
                    <div class="post__modifsuppr">
                        <Link to="/modifier">
                            <button class='post__modifsuppr--modifier'>Modifier</button>
                        </Link>
                        <Link to="/post">
                            <button class='post__modifsuppr--supprimer'>Supprimer</button>
                        </Link>
                    </div>
                    <div class="post__avis">
                        <i class="post__avis--like fa-solid fa-thumbs-up"></i>
                        <i class="post__avis--dislike fa-solid fa-thumbs-down"></i>
                    </div>
                </div>
            </div>
        </section>
    </main>
    )
}

export default Afficher