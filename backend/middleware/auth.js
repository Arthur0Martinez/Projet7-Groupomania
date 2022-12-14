const jwt = require('jsonwebtoken');
require("dotenv").config();
//Vérifie que l'utilisateur est bien connecté et transmission des informations de connexion
module.exports = (req, res, next) => {
   try {
       const token = req.headers.authorization.split(' ')[1];
       const decodedToken = jwt.verify(token, process.env.TOKEN);
       const userId = decodedToken.userId;
       console.log("auth");
       req.auth = {
           userId: userId
       };
	next();
   } catch(error) {
       res.status(401).json({ error });
   }
};