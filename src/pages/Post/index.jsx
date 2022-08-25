import Desert from '../../assets/desert.png'
import { Link } from "react-router-dom"

function Post() {
    return (
        <main>
        <h2 class="page__title">Posts de la communauté</h2>
        <section class="allpost">
            
            <Link class="post" to='/afficher'>
                    <h3 class="post__titre">Mes vacances au désert c'était vraiment trop beau</h3>
                    <img class="post__img" src={Desert} alt="post"/>
                    <p class="post__text">Description du post Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, libero assumenda quae ipsa, necessitatibus debitis expedita commodi molestias dolorem a dolores ducimus est sequi ad quibusdam! Eum in inventore mollitia?</p>
                    <div class="post__touslesbtn">
                        <div class="post__avis">
                        <i class="post__avis--like fa-solid fa-thumbs-up"></i>
                        <i class="post__avis--dislike fa-solid fa-thumbs-down"></i>
                        </div>
                    </div>
            </Link>
            <Link class="post" to='/afficher'>
                <h3 class="post__titre">Mes vacances au désert c'était vraiment trop beau</h3>
                <img class="post__img" src={Desert} alt="post"/>
                <p class="post__text">Description du post Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, libero assumenda quae ipsa, necessitatibus debitis expedita commodi molestias dolorem a dolores ducimus est sequi ad quibusdam! Eum in inventore mollitia?</p>
                <div class="post__touslesbtn">
                    <div class="post__avis">
                    <i class="post__avis--like fa-solid fa-thumbs-up"></i>
                    <i class="post__avis--dislike fa-solid fa-thumbs-down"></i>
                    </div>
                </div>
                </Link>
            <Link class="post" to='/afficher'>
                <h3 class="post__titre">Mes vacances au désert c'était vraiment trop beau</h3>
                <img class="post__img" src={Desert} alt="post"/>
                <p class="post__text">Description du post Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, libero assumenda quae ipsa, necessitatibus debitis expedita commodi molestias dolorem a dolores ducimus est sequi ad quibusdam! Eum in inventore mollitia?</p>
                <div class="post__touslesbtn">
                    <div class="post__avis">
                    <i class="post__avis--like fa-solid fa-thumbs-up"></i>
                    <i class="post__avis--dislike fa-solid fa-thumbs-down"></i>
                    </div>
                </div>
                </Link>
        </section>
    </main>
    )
}

export default Post