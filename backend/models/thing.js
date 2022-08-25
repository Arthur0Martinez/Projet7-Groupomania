const mongoose = require('mongoose');
//Création d'un schéma avec les champs souhaités
//Indication du type et si il est obligatoire ou non
const thingSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  likes: { type: Number },
  dislikes: { type: Number },
  usersLiked: [String],
  usersDisliked: [String],
});

//On exporte le schéma en tant que modèle Mongoose
module.exports = mongoose.model('Thing', thingSchema);