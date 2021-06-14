const express = require('express');
const app = express();
const PORT = 3000;
const pokemon = require('./models/pokemon')

app.set('view engine', 'jsx');                          //MUST be above the Routes
app.engine('jsx', require('express-react-views').createEngine())

app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Pokemon App!</h1>')
})

app.get('/pokemon', (req, res) => {
  res.render('Index');
})






app.listen(PORT, () => {
  console.log(`Listening in on ${PORT}`);
})
