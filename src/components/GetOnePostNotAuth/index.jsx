//Affichage en HTML de la publication séléctionner par l'utilisateur.
//Accesible à tous à l'exception de l'utilisateur qui à crée la publication.
function getOnePostNotAuth(data) {
    const html = `
    <a class="post">
            <h3 class="post__titre">${data.name}</h3>
            <img class="post__img" src=${data.imageUrl} alt="post">
            <p class="post__text">${data.description}</p>
            <div class="post__touslesbtn">
                <div class="post__avis">
                    <i class="post__avis--like fa-solid fa-thumbs-up" id="Like"></i>
                    <i class="post__avis--dislike fa-solid fa-thumbs-down" id="Dislike"></i>
                </div>
            </div>
    </a>`
const allPosts = document.getElementById("Post");
allPosts.insertAdjacentHTML("beforeend", html);
}

export default getOnePostNotAuth