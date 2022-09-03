import axios from 'axios';
import { element } from 'prop-types';
import { setAuthToken } from "../../components/SignIn";

function Afficher() {
    let newUrl = new URL(window.location.href);
    let idProduct = newUrl.searchParams.get("id");
    let token = localStorage.getItem("token");
    let userId = localStorage.getItem("userId");

    if (token) {
        setAuthToken(token);
    }else{
        window.location = "/";
    }  
    axios({
        method: "GET",
        url: `http://localhost:5000/api/publication/${idProduct}`,
    })
    .then(function (res) {
        console.log(res)
        console.log(res.data.userId)
        console.log(userId)
        if(res.data.userId === userId){
            getOnePost(res.data);
        }else{
            getOnePostNotAuth(res.data);
        }
        likeAndDislike(res.data);
        deleteOnePost(res.data);
        modifyOnePost(res.data);
    })


    function getOnePost(data) {
        const html = `
        <a class="post">
                <h3 class="post__titre">${data.name}</h3>
                <img class="post__img src={Desert} alt="post">
                <p class="post__text">${data.description}</p>
                <div class="post__touslesbtn">
                    <div class="post__modifsuppr">
                        <button class='post__modifsuppr--modifier' id="Modifier">Modifier</button>
                        <button class='post__modifsuppr--supprimer' id="Supprimer">Supprimer</button>
                    </div>
                    <div class="post__avis">
                        <i class="post__avis--like fa-solid fa-thumbs-up" id="Like"></i>
                        <i class="post__avis--dislike fa-solid fa-thumbs-down" id="Dislike"></i>
                    </div>
                </div>
        </a>`
    const allPosts = document.getElementById("Post");
    allPosts.insertAdjacentHTML("beforeend", html);
    }
    function getOnePostNotAuth(data) {
        const html = `
        <a class="post">
                <h3 class="post__titre">${data.name}</h3>
                <img class="post__img src={Desert} alt="post">
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
    function likeAndDislike(data) {
        let likeBtn = document.getElementById("Like");
        let dislikeBtn = document.getElementById("Dislike");
        likeBtn.innerHTML = data.likes;
        dislikeBtn.innerHTML = data.dislikes;
        if(data.userLiked === userId){
            console.log("Meme User")
        }else if (data.userDisliked === userId){
            console.log("Meme User")
        }

        likeBtn.addEventListener("click", (stop) => {
            if(userId !== data.userLiked){
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
            } else if (userId === data.userLiked) {
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
        })

        dislikeBtn.addEventListener("click", (stop) => {
            if(userId !== data.userDisliked){
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
                })
            } else if (userId === data.userDisliked) {
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
                })
            }
        })
    }
    function deleteOnePost(data) {
        let deleteItemBtn = document.getElementById("Supprimer");
        deleteItemBtn.addEventListener("click", (stop) => {
            stop.preventDefault();
            axios({
                method: "DELETE",
                url: `http://localhost:5000/api/publication/${idProduct}`,
            })
            .then(function (res) {
                console.log(res)
                window.location = "/post";
            })
        })
    }
    function modifyOnePost(params) {
        let modifyItemBtn = document.getElementById("Modifier");
        modifyItemBtn.addEventListener("click", (stop) => {
            stop.preventDefault();
            window.location = `/modifier?id=${idProduct}`;
        })
    }
        

    return (
    <main>
        <section class="selectpost" id='Post'>
            
        </section>
    </main>
    )
}

export default Afficher