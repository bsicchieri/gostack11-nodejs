// importando o express
const express = require('express');

// declarando a varival app
const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World' });
});

// porta
app.listen(3333, () => {
  console.log('Back-end started!');
});



