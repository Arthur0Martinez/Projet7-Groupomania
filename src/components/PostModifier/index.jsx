import axios from "axios"
import React, { useState } from "react"
import { setAuthToken } from "../SignIn";

const Modifier = () => {
    let newUrl = new URL(window.location.href);
    let idProduct = newUrl.searchParams.get("id");
    let token = localStorage.getItem("token");
    let error = document.getElementById("contenterror")
    
    
    const getPostInfo = (e) => {
        axios({
            url: `http://localhost:5000/api/publication/${idProduct}`,
        })
        .then(function (res) {
            let nameId = document.getElementById("name");
            nameId.placeholder = res.data.name;

            //let fileId = document.getElementById("imageUrl");
            //---------A rajouter avec l'image
            //fileId.value = res.data.imageUrl;
            //---------
            let descriptionId = document.getElementById("description");
            descriptionId.placeholder = res.data.description;
        })

    };
    if (token) {
        setAuthToken(token);
        getPostInfo()
    }else{
        window.location = "/";
    }  
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [file, setImageUrl] = useState('');

    const handlePost = (e) => {
        e.preventDefault();
        let userId = localStorage.getItem("userId");
        console.log(userId);
        let imageUrl = file.match(/[^\\/]*$/)[0];
        console.log(imageUrl);
        if (/^[A-Za-z0-9'\.\-\s\,]+$/i.test(name) &&
            /^[A-Za-z0-9'\.\-\s\,]+$/i.test(description)) {
            axios({
                method: "PUT",
                url: `http://localhost:5000/api/publication/${idProduct}`,
                data: {
                    name,
                    description,
                    imageUrl,
                },

            })
            .then((res) => {
                console.log(res)
                if (res.data.errors) {
                    console.log("Mal rempli")
                    error.innerHTML = "Erreur de serveur, merci de réessayer"
                } else {
                    window.location = "/post";
                }
            })
            .catch((err) => {
                console.log(token)
                console.log("Mauvais", err);
                console.log(err.toJSON());
            })
        }else{
            error.innerHTML = "Champs remplis incorrects"
        }
    }
        return (
            <section class="selectpost"> 
                    <form class="post post--sanshover modif__post" onSubmit={handlePost}>
                        <input
                            type="text" 
                            name="name" 
                            id="name"
                            placeholder=""
                            class="post__titre modif__titre"
                            onChange={(e) => setName (e.target.value)} 
                            value={name}
                        />
                        <input
                            type="file" 
                            accept="image/*"
                            name="image" 
                            id="imageUrl"
                            class="post__img modif__image"
                            onChange={(e) => setImageUrl (e.target.value)} 
                            value={file}
                        />
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