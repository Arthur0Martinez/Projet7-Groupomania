import axios from "axios"
import React, { useState } from "react"
import { setAuthToken } from "../SignIn";

//Fonction qui permet de modifier une publication
const Modifier = () => {
    let newUrl = new URL(window.location.href);
    let idProduct = newUrl.searchParams.get("id");
    let token = localStorage.getItem("token");
    let error = document.getElementById("contenterror")
    
    //Fonction qui permet de récupérer les données de la publication.
    //On affiche alors ces données dans un placeholder pour que l'utilisateur  
    //se rappele ce qu'il à écrit précedement.
    const getPostInfo = (e) => {
        axios({
            url: `http://localhost:5000/api/publication/${idProduct}`,
        })
        .then(function (res) {
            let nameId = document.getElementById("name");
            nameId.placeholder = res.data.name;

            let descriptionId = document.getElementById("description");
            descriptionId.placeholder = res.data.description;
        })

    };

    //On vient récupérer les valeurs çi dessous à chaque changement fait par l'utilisateur
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState('');
    
    //Vérification du Token comme dans les autres pages
    if (token) {
        setAuthToken(token);
        getPostInfo()
    }else{
        window.location = "/";
    }  

    //Fonction qui s'execute "on submit", 
    //c'est à dire lorsque l'utilisateur clique sur Modifier 
    const handlePost = (e) => {
        e.preventDefault();
        let error = document.getElementById("contenterror")
        let userId = localStorage.getItem("userId");
        console.log(userId);
        //Avec les RegEx on empeche que les emplacements de texte soit vide et on les sécurisent
        //Si aucune nouvelle image n'est rempli, la précedente est enregistrer.
        if (/^(.|\s)*[a-zA-Z]+(.|\s)*$/i.test(name) &&
            /^(.|\s)*[a-zA-Z]+(.|\s)*$/i.test(description )
            ) {

                let formData = new FormData()

                formData.append("name", name);
                formData.append("description", description);
                formData.append("image", file);
                formData.append("userId", userId);
                
                //On fait une méthode POST avec les données de l'application
                //L'image est bien envoyé en tant que file pour etre traité
                axios({
                    method: "PUT",
                    url: `http://localhost:5000/api/publication/${idProduct}`,
                    data: formData,
                    headers: {
                        'Content-Type': 'application/json', 
                        Authorization: `Bearer ${token}`,
                    },
    
                })
                //On récupère la réponse et les erreurs
                //L'utilisateur est rediriger vers la page d'accueil si tout à fonctionner
                //Sinon un message d'erreur s'affiche
                .then((res) => {
                    console.log(res)
                    console.log(res.data)
                    console.log("Le header", res.headers)
                    if (res.data.errors) {
                        console.log("Mal rempli")
                        error.innerHTML = "Erreur de serveur, merci de réessayer"                
                    }else{
                        window.location = "/post";
                    }
                })
                .catch((err) => {
                    console.log("Mauvais", err);
                })
            }else{
                error.innerHTML = "Champs remplis incorrects"
            }
        }
        //On affiche dans le HTML le formulaire qui permet de créer une publication
        //Les variations de contenus sont enregistrer à chaque changements
        return (
            <section class="selectpost"> 
                    <form class="post post--sanshover modif__post" onSubmit={handlePost}>
                        <input
                            type="text" 
                            name="name" 
                            id="name"
                            placeholder=""
                            class="post__titre modif__titre"
                            onChange={(e) => {                        
                                const name = e.target.value;
                                setName(name)
                            }} 
                        />
                        <input
                            type="file" 
                            name="image" 
                            id="imageUrl"
                            class="post__img modif__image"
                            accept="image/png, image/jpeg, image/jpg"
                            onChange={(e) => {                        
                                const file = e.target.files[0];
                                setFile(file)
                            }} 
                        />
                        <label class="modif__image--label" for="imageUrl">Choisir une nouvelle image ?</label>
                        <i class="fa-solid fa-file-arrow-up modif__icone"></i>
                        <textarea
                            type="text" 
                            name="description" 
                            id="description"
                            placeholder=""
                            class="post__text modif__description"
                            onChange={(e) => setDescription (e.target.value)} 
                            value={description}
                        />
                        <div class="contenterror contenterror__post" id="contenterror"></div>
                        <input type="submit" class="modif__modifier" value="Modifier" />
                    </form>
            </section>
        );

};

export default Modifier