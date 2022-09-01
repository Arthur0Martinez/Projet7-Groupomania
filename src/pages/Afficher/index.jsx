import axios from 'axios';
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
        console.log(res.data.userId)
        console.log(userId)
        if(res.data.userId === userId){
            getOnePost(res.data);
        }else{
            getOnePostNotAuth(res.data);
        }
        deleteOnePost(res.data);
        modifyOnePost(res.data);
    })

    axios({
        method: "POST",
        url: `http://localhost:5000/api/publication/${idProduct}/like`,
        data: {
            userId,
            like : 0,
        }
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
                        <i class="post__avis--like fa-solid fa-thumbs-up"></i>
                        <i class="post__avis--dislike fa-solid fa-thumbs-down"></i>
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
                        <i class="post__avis--like fa-solid fa-thumbs-up"></i>
                        <i class="post__avis--dislike fa-solid fa-thumbs-down"></i>
                    </div>
                </div>
        </a>`
    const allPosts = document.getElementById("Post");
    allPosts.insertAdjacentHTML("beforeend", html);
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