const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Pokemon App!</h1>')
})








app.listen(PORT, () => {
  console.log(`Listening in on ${PORT}`);
})
