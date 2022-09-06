import axios from 'axios';

//Fonction utilisé pour supprimer un post avec la méthode DELETE
function deleteOnePost(data) {
    let newUrl = new URL(window.location.href);
    let idProduct = newUrl.searchParams.get("id");
    let deleteItemBtn = document.getElementById("Supprimer");
    //La méthode DELETE s'execute au clique
    deleteItemBtn.addEventListener("click", (stop) => {
        stop.preventDefault();
        axios({
            method: "DELETE",
            url: `http://localhost:5000/api/publication/${idProduct}`,
        })
        .then(function (res) {
            console.log(res)
            //Redirection de l'utilisateur sur la route /post (affiche tous les post actualisés)
            window.location = "/post";
        })
    })
}

export default deleteOnePost