import axios from "axios"
import React, { useState } from "react"

const PostThing = () => {
    const [name, setName] = useState(' ');
    const [description, setDescription] = useState(' ');
    const [imageUrl, setImageUrl] = useState('');

    const handlePost = (e) => {
        e.preventDefault();
        let userId = JSON.parse(localStorage.getItem("userId"));
        let getLocalStorageToken = JSON.parse(localStorage.getItem("token"));
        console.log(userId);
        console.log(getLocalStorageToken);
        axios({
            method: "POST",
            url: "http://localhost:5000/api/publication",
            data: {
                userId,
                name,
                description,
                imageUrl,
            },
        })
        .then((res) => {
            console.log(res)
            if (res.data.errors) {
                console.log("Mal rempli")
            } else {
                window.location = "/post";
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return (
        <section class="selectpost"> 
                <form class="post post--sanshover modif__post" action=" " onSubmit={handlePost}>
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
                        name="imageUrl" 
                        id="imageUrl"
                        class="post__img modif__image"
                        onChange={(e) => setImageUrl (e.target.value)} 
                        value={imageUrl}
                    />
                    <textarea
                        type="text" 
                        name="description" 
                        id="description"
                        placeholder="La description"
                        class="post__text modif__description"
                        onChange={(e) => setDescription (e.target.value)} 
                        value={description}
                    />
                    <input type="submit" class="modif__modifier" value="Enregistrer" />
                </form>
        </section>
    );
};

export default PostThing