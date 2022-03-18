const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const mongoose = require('mongoose');
const path = require('path')

const sauceRoutes = require('./routes/sauce');
const userRoutes = require('./routes/user');


// On connect MongoDB
mongoose.connect('mongodb+srv://Manonhfn:TaylorLautner04@cluster0.jgevr.mongodb.net/myFirstDatabase?authSource=admin&replicaSet=atlas-nlndj8-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true',
{ useNewUrlParser: true,
  useUnifiedTopology: true })
  // Si connexion réussie on affiche un message
  .then(() => console.log('Connexion à MongoDB réussie !'))
  // Si connexion non réussie on affiche un autre message
  .catch(() => console.log('Connexion à MongoDB échouée !'));
  
  const app = express();
  
app.use(helmet())
app.disable('x-powered-by');
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
app.use(bodyParser.json());

app.use('/images', express.static(path.join(__dirname,'images')));

app.use('/api/auth', userRoutes);
app.use('/api/sauces', sauceRoutes);

  module.exports = app;