import axios from "axios"
import React, { useState } from "react"
import { setAuthToken } from "../SignIn";

const PostThing = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [file, setImageUrl] = useState('');
    const token = localStorage.getItem("token");
    if (token) {
        setAuthToken(token);
    }else{
        window.location = "/";
    }
    const handlePost = (e) => {
        e.preventDefault();
        let error = document.getElementById("contenterror")
        let userId = localStorage.getItem("userId");
        console.log(userId);
        let imageUrl = file.match(/[^\\/]*$/)[0];
        console.log(imageUrl);
        if (/^[A-Za-z0-9'\.\-\s\,]+$/i.test(name) &&
        /^[A-Za-z0-9'\.\-\s\,]+$/i.test(description)) {
            axios({
                method: "POST",
                url: "http://localhost:5000/api/publication",
                data: {
                    name,
                    description,
                    userId,
                    imageUrl,
                },

            })
            .then((res) => {
                console.log(res)
                if (res.data.errors) {
                    console.log("Mal rempli")
                    error.innerHTML = "Erreur de serveur, merci de réessayer"                
                }else{
                    //window.location = "/post";
                }
            })
            .catch((err) => {
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
                        placeholder="Le titre"
                        class="post__titre modif__titre"
                        onChange={(e) => setName (e.target.value)} 
                        value={name}
                    />
                    <input
                        type="file" 
                        name="filename" 
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
                        placeholder="La description"
                        class="post__text modif__description"
                        onChange={(e) => setDescription (e.target.value)} 
                        value={description}
                    />
                    <div class="contenterror contenterror__post" id="contenterror"></div>
                    <input type="submit" class="modif__modifier" value="Enregistrer" />
                </form>
        </section>
    );
}

export default PostThing