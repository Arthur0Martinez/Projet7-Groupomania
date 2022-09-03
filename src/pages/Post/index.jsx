import axios from 'axios';
import { setAuthToken } from "../../components/SignIn";


function Post() {  
    let token = localStorage.getItem("token");
    if (token) {
        setAuthToken(token);
    }else{
        window.location = "/";
    }
    axios.get("http://localhost:5000/api/publication")
    .then(function (res) {
        let arrayAllPost = res.data;
        let arrayAllPostReverse = arrayAllPost.reverse(); 
        console.log(arrayAllPostReverse);
        getAllPost(res.data);
    })
    .catch((err) => {
        console.log("Mauvais", err);
    });

    function getAllPost(data) {
        for (let i = 0; i < data.length; i++) {
            const html = `
                <a href="afficher?id=${data[i]._id}" class="post">
                        <h3 class="post__titre">${data[i].name}</h3>
                        <img class="post__img src= alt="post">
                        <p class="post__text">${data[i].description}</p>

                </a>`
            const allPosts = document.getElementById("items");
            allPosts.insertAdjacentHTML("beforeend", html);
          }
    }

        return (
            <main>
            <h2 class="page__title">Posts de la communauté</h2>
            
            <section class="allpost" id="items">
              
            </section>
        </main>
        )

}

export default Post