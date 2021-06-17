// Load express, create express app, set PORT, create 'require' consts
//FOR MONGODB - require dotenv
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;
const Pokemon = require('./models/pokemon.js'); //pokemon.js?

/****************************************
 Database set up
****************************************/
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

mongoose.connection.once('open', () => {    //will eventualy delete
  console.log('connected to mongo');
});

// Configure the app (app.set)
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Mount middleware (app.use)
app.use((req, res, next) => {                                    //do i need this
  console.log('***********Middleware checking in***********')
  console.log('I run before all routes')
  next()
})

app.use(express.urlencoded({ extended: true }));  //body parser?

// Dummy Code For now...
app.post('/products/', (req, res) => {
  console.log('req.body is', req.body)
  // res.send('This route works')
  res.send(res.body)
})
//END DUMMY CODE


// Seed Route
app.get('/pokemon/seed', (req, res) =>{
  Pokemon.create([
    {name: "bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur"},
    {name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur"},
    {name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur"},
    {name: "charmander", img: "http://img.pokemondb.net/artwork/charmander"},
    {name: "charizard", img: "http://img.pokemondb.net/artwork/charizard"},
    {name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle"},
    {name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle"}
  ], (err, data) =>{
      res.redirect('/pokemon');
  })
});

/*****************
Mount INDUCES Routes
******************/
/*
Index
*/
app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Pokemon App!(Index Page)</h1>');
});

app.get('/pokemon', (req, res) => {
  Pokemon.find({}, (err, allPokemon)=>{
    if(err){
      res.status(404).send({
          msg: err.message
      })
    } else {
      res.render('Index', {pokemon: allPokemon});
    }
  })
});

/*
New
*/
app.get('/pokemon/new', (req, res) => {
  res.render('New');
})
/*
Delete
*/
/*
Update
*/
/*
Create
*/
// app.post('/pokemon/', (req, res) =>{
//         Pokemon.push(req.body);
//         res.redirect('/pokemon');
//   })
app.post('/pokemon/', (req, res) =>{
  Pokemon.create(req.body, (err, createdPokemon) => {
    if(err){
      res.status(404).send({
        msg: err.message
      })
    } else {
      console.log(createdPokemon);
      // res.send(createdPokemon);
      res.redirect('/pokemon')
    }
  })
});
/*
Edit
*/
/*
Show
*/
app.get('/pokemon/:id', (req, res) => {
  Pokemon.findById(req.params.id, (err, foundPokemon)=>{
    if(err){
      res.status(404).send({
          msg: err.message
      })
    } else {
      res.render('Show', {pokemon: foundPokemon});
    };
  });
  // res.render('Show', {pokemon: pokemon[req.params.id]})
});

//tell app to listen on port 3000
app.listen(PORT, () => {
  console.log(`Listening in on ${PORT}`);
})
