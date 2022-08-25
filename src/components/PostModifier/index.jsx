

function Modifier() {
    return (
        <section class="selectpost"> 
            <div class="post post--sanshover modif__post">
                <input
                    type="text"
                    name="titre" 
                    id="titre"
                    placeholder="Le titre"
                    class="post__titre modif__titre"
                />
                <input
                    type="file"
                    name="image"
                    id="image"
                    class="post__img modif__image" 
                />
                <textarea
                    type="text"
                    name="description" 
                    id="description"
                    placeholder="La description"
                    class="post__text modif__description"
                />
                <input 
                    type="submit" 
                    class="modif__modifier" 
                    value="Modifier" 
                />
            </div>
        </section>
    )
  }

export default Modifier