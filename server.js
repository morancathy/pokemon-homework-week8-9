// Load express, create express app, set PORT, create 'require' consts
//FOR MONGODB - require dotenv
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;
const pokemon = require('./models/pokemon'); //pokemon.js?

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
// app.use((req, res, next) => {                                    //do i need this
//   console.log('***********Middleware checking in***********')
//   console.log('I run before all routes')
//   next()
// })

// Mount middleware (app.use)
app.use(express.urlencoded({ extended: true }));

/*****************
Mount INDUCES Routes
******************/
/*
Index
*/
app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Pokemon App!(Index Page)</h1>');
});

app.get('/pokemon/', (req, res) => {
      res.render('Index', {pokemon: pokemon});
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
app.post('/pokemon/', (req, res) =>{
        pokemon.push(req.body);
        res.redirect('/pokemon');
  })

/*
Edit
*/
/*
Show
*/
app.get('/pokemon/:id', (req, res) => {
  res.render('Show', {
    pokemon: pokemon[req.params.id]
  })
});


//tell app to listen on port 3000
app.listen(PORT, () => {
  console.log(`Listening in on ${PORT}`);
})
