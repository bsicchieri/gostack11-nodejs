// importando o express
const express = require('express');

// declarando a varival app
const app = express();

app.use(express.json());

// metodo GET
app.get('/projects', (request, response) => {
  const { title, owner } = request.query;

  console.log(title);
  console.log(owner);

  return response.json([
    'Projeto 1',
    'Projeto 2',
  ]);
});

// metodo POST
app.post('/projects', (request, response) => {
  const { title, owner } = request.body;
  
  console.log(title);
  console.log(owner);
  
  return response.json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3',
  ]);
});

// metodo PUT
app.put('/projects/:id', (request, response) => {
  const { id } = request.params;

  console.log(id);

  return response.json([
    'Projeto 4',
    'Projeto 2',
    'Projeto 3',
  ]);
});

// metodo DELETE
app.delete('/projects/:id', (request, response) => {
  const { id } = request.params;

  console.log(id);

  return response.json([
    'Projeto 2',
    'Projeto 3',
  ]);
});

// porta
app.listen(3333, () => {
  console.log('Back-end started!');
});



