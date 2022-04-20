const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello from my personal smarty app');
});

const users = [
  {
    name: 'Christine Torres',
    phone: '(486) 483-6218',
    email: 'etiam@aol.net',
  },
  {
    name: 'Justin Suarez',
    phone: '1-518-233-6137',
    email: 'tellus.aenean.egestas@hotmail.net',
  },
  {
    name: 'Myles Moran',
    phone: '1-966-346-1427',
    email: 'nulla.facilisis@outlook.net',
  },
  {
    name: 'Maggie Britt',
    phone: '1-311-428-4309',
    email: 'consectetuer.adipiscing.elit@google.couk',
  },
  {
    name: 'Cheryl Hubbard',
    phone: '(152) 847-1643',
    email: 'sed.eu@hotmail.org',
  },
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
