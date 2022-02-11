const express = require ('express');

const app = express();

// On connect MongoDB
const mongoose = require ('mongoose');
mongoose.connect('mongodb+srv://<Manonhfn>:TaylorLautner04@cluster0.jgevr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{ useNewUrlParser: true,
  useUnifiedTopology: true,})
  // Si connexion réussie on affiche un message
  .then (() => console.log ('Connexion à MongoDB réussie !'))
  // Si connexion non réussie on affiche un autre message
  .catch (() => console.log('Connexion à MongoDB échouée!'));

  const userRoutes = requires ('./route/user.route')

  module.exports = app;