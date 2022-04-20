const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello from my personal smarty app');
});

const users = [
  { id: 1, name: 'Mamun', email: 'mamun@gmail.com' },
  { id: 2, name: 'Mamun', email: 'mamun@gmail.com' },
  { id: 3, name: 'Mamun', email: 'mamun@gmail.com' },
  { id: 4, name: 'Mamun', email: 'mamun@gmail.com' },
];

app.get('/users', (req, res) => {
  res.send(users);
});

app.get('/user/:id', (req, res) => {
  console.log(req.params);
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);
  res.send(user);
});

app.listen(port, () => {
  console.log('Listening to port', port);
});
