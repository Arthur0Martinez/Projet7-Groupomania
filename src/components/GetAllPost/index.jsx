import axios from 'axios';

//Fonction qui va venir afficher toutes les publications enregistrer sur l'API
function GetPost(){
    //On récupère les publications l'aide de la méthode GET en passant par axios
    axios.get("http://localhost:5000/api/publication")
    .then(function (res) {
        let arrayAllPost = res.data;
        //On inverse l'ordre des publications de res.data. Cela permet d'afficher les publications dans un ordre chronologique
        let arrayAllPostReverse = arrayAllPost.reverse(); 
        console.log(arrayAllPostReverse);
        getAllPost(res.data);
    })
    .catch((err) => {
        console.log("Mauvais", err);
    });
    //Fonction qui vient récupérer toutes les données de data en s'exectutant à chaque élément. 
    //Cela s'arrete lorsque la variable i atteint le nombre de publication présent dans data.
    function getAllPost(data) {
        console.log(data)
        console.log(data[0].imageUrl)
        for (let i = 0; i < data.length; i++) {
            const html = `
                <a href="afficher?id=${data[i]._id}" class="post">
                        <h3 class="post__titre">${data[i].name}</h3>
                        <img class="post__img" src="${data[i].imageUrl} " alt="post"/>
                        <p class="post__text">${data[i].description}</p>

                </a>`
            const allPosts = document.getElementById("items");
            allPosts.insertAdjacentHTML("beforeend", html);
          }
    }
}

export default GetPost