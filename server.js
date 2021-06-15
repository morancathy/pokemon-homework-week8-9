// Load express, create express app, set PORT, create 'require' consts
const express = require('express');
const app = express();
const PORT = 3000;
const pokemon = require('./models/pokemon')

// Configure the app (app.set)
app.set('view engine', 'jsx');                        
app.engine('jsx', require('express-react-views').createEngine())

// Mount middleware (app.use)
app.use(express.urlencoded({ extended: true }))

/*****************
Mount INDUCES Routes
******************/
/*
Index
*/
app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Pokemon App!</h1>')
})

app.get('/pokemon/', (req, res) => {
  res.render('Index', {pokemon: pokemon});
})
/*
New
*/
/*
Delete
*/
/*
Update
*/
/*
Create
*/
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
})


//tell app to listen on port 3000
app.listen(PORT, () => {
  console.log(`Listening in on ${PORT}`);
})
