import axios from 'axios';

//Fonction qui vient gérer la fonctionnalité des likes et des dislikes.
function likeAndDislike(data) {
    //Récupération des informations nécessaires à ma fonction
    let userId = localStorage.getItem("userId");
    let likeBtn = document.getElementById("Like");
    let dislikeBtn = document.getElementById("Dislike");
    let newUrl = new URL(window.location.href);
    let idProduct = newUrl.searchParams.get("id");
    console.log("Users qui ont like", data.usersLiked)
    console.log("Users qui ont dislike", data.usersDisliked)
    console.log("User qui est connecté à la page", userId)
    //On vient afficher le nombre de likes et de dislikes dans le HTML (données récupérées dans l'API)
    likeBtn.innerHTML = data.usersLiked.length;
    dislikeBtn.innerHTML = data.usersDisliked.length;
    //On vérifie quand la fonction se lance si l'utilisateur à déjà liker la publication
    //On vient récupérer cette info dans le userLiked, 
    //tableau qui contient les userId de toutes les personnes qui ont liker
    //Si l'user à like on vient bloquer l'accès au bouton dislike
    for (let i = 0; i < data.usersLiked.length; i++) {
        if(data.usersLiked[i] === userId){
            console.log("User a Like")
            dislikeBtn.setAttribute("style", "pointer-events: none; color: grey; opacity: 55%")         
        }
    }
    //On vérifie quand la fonction se lance si l'utilisateur à déjà disliker la publication
    //On vient récupérer cette info dans le userDisliked, 
    //tableau qui contient les userId de toutes les personnes qui ont disliker
    //Si l'user à dislike on vient bloquer l'accès au bouton like    
    for (let i = 0; i < data.usersDisliked.length; i++) {
        if (data.usersDisliked[i] === userId){
            console.log("User a Dislike")
            likeBtn.setAttribute("style", "pointer-events: none; color: grey; opacity: 55%")
        }
    }
    //Fonction qui se lance au clique sur le bouton like
    //A chaque clique on relance la fonction likeAndDislike
    likeBtn.addEventListener("click", (stop) => {
        stop.preventDefault();
        //Si aucun utilisateur n'a liker la publication alors on vient ajouter un like sans vérification de l'userId
        if (data.usersLiked.length === 0) {
            axios({
                method: "POST",
                url: `http://localhost:5000/api/publication/${idProduct}/like`,
                data: {
                    like: 1,
                    userId,
                }
            })
            .then(function (res) {
                console.log(res.data)
                window.location.reload();
                likeAndDislike();
            })
        }else{
            //On vérifie si l'userId de l'utilisateur est présent dans les usersLiked
            for (let i = 0; i < data.usersLiked.length; i++) {
                //Si l'utilisateur n'a pas liker la publication on envoie une requete à l'API pour l'indiquer
                //Méthode POST qui envoie le userId(pour vérification)
                //On renvoie 1 à l'API pour indiquer que l'utilisateur à like
                if(userId !== data.usersLiked[i] ){
                    console.log("Like")
                    console.log(data)
                    axios({
                        method: "POST",
                        url: `http://localhost:5000/api/publication/${idProduct}/like`,
                        data: {
                            like: 1,
                            userId,
                        }
                    })
                    .then(function (res) {
                        console.log(res.data)
                        window.location.reload();
                        likeAndDislike();
                    })
                //Si l'utilisateur a déja liker la publication on envoie une requete à l'API pour l'indiquer
                //Méthode POST qui envoie le userId(pour vérification)
                //On renvoie 0 à l'API pour enlever le like que l'utilisateur à mis précedement
                } else if (userId === data.usersLiked[i]) {
                    console.log("Like enlevé")
                    console.log(data)
                    axios({
                        method: "POST",
                        url: `http://localhost:5000/api/publication/${idProduct}/like`,
                        data: {
                            like: 0,
                            userId,
                        }
                    })
                    .then(function (res) {
                        console.log(res.data)
                        window.location.reload();
                        likeAndDislike();
                    })
                }
            }
        }
    })

    //Fonction qui se lance au clique sur le bouton dislike
    //A chaque clique on relance la fonction likeAndDislike  
    dislikeBtn.addEventListener("click", (stop) => {
        stop.preventDefault();
        //Si aucun utilisateur n'a disliker la publication alors on vient ajouter un dislike sans vérification de l'userId
        if (data.usersDisliked.length === 0) {
            axios({
                method: "POST",
                url: `http://localhost:5000/api/publication/${idProduct}/like`,
                data: {
                    like: -1,
                    userId,
                }
            })
            .then(function (res) {
                console.log(res.data)
                window.location.reload();
                likeAndDislike();
            })
        }else{
            //On vérifie si l'userId de l'utilisateur est présent dans les usersDisliked
            for (let i = 0; i < data.usersDisliked.length; i++) {
                //Si l'utilisateur n'a pas disliker la publication on envoie une requete à l'API pour l'indiquer
                //Méthode POST qui envoie le userId(pour vérification)
                //On renvoie -1 à l'API pour indiquer que l'utilisateur à dislike
                if(userId !== data.usersDisliked[i]){
                    console.log("Dislike")
                    console.log(data)
                    axios({
                        method: "POST",
                        url: `http://localhost:5000/api/publication/${idProduct}/like`,
                        data: {
                            like: -1,
                            userId,
                        }
                    })
                    .then(function (res) {
                        console.log(res.data)
                        window.location.reload();
                        likeAndDislike();
                    })
                //Si l'utilisateur a déja disliker la publication on envoie une requete à l'API pour l'indiquer
                //Méthode POST qui envoie le userId(pour vérification)
                //On renvoie 0 à l'API pour enlever le dislike que l'utilisateur à mis précedement
                } else if (userId === data.usersDisliked[i]) {
                    console.log("Like")
                    console.log(data)
                    axios({
                        method: "POST",
                        url: `http://localhost:5000/api/publication/${idProduct}/like`,
                        data: {
                            like: 0,
                            userId,
                        }
                    })
                    .then(function (res) {
                        console.log(res.data)
                        window.location.reload();
                        likeAndDislike();
                    })
                }
            }
        }
    })
}

export default likeAndDislike