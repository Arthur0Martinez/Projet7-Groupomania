//Fonction qui va rediriger l'utilisateur vers la page modification on clic sur le bouton "Modifier"
function modifyOnePost(params) {
    let newUrl = new URL(window.location.href);
    let idProduct = newUrl.searchParams.get("id");
    let modifyItemBtn = document.getElementById("Modifier");
    modifyItemBtn.addEventListener("click", (stop) => {
        stop.preventDefault();
        window.location = `/modifier?id=${idProduct}`;
    })
}

export default modifyOnePost