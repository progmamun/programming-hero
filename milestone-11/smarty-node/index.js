const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from my personal smarty app');
});

const users = [
  {
    id: 01,
    name: 'Christine Torres',
    phone: '(486) 483-6218',
    email: 'etiam@aol.net',
  },
  {
    id: 02,
    name: 'Justin Suarez',
    phone: '1-518-233-6137',
    email: 'tellus.aenean.egestas@hotmail.net',
  },
  {
    id: 03,
    name: 'Myles Moran',
    phone: '1-966-346-1427',
    email: 'nulla.facilisis@outlook.net',
  },
  {
    id: 04,
    name: 'Maggie Britt',
    phone: '1-311-428-4309',
    email: 'consectetuer.adipiscing.elit@google.couk',
  },
  {
    id: 05,
    name: 'Cheryl Hubbard',
    phone: '(152) 847-1643',
    email: 'sed.eu@hotmail.org',
  },
];

app.get('/users', (req, res) => {
  if (req.query.name) {
    const search = req.query.name.toLowerCase();
    const matched = users.filter(user =>
      user.name.toLowerCase().includes(search)
    );
    res.send(matched);
  } else {
    res.send(users);
  }
});

app.get('/user/:id', (req, res) => {
  console.log(req.params);
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);
  res.send(user);
});

app.post('/user', (req, res) => {
  console.log('request', req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});

app.listen(port, () => {
  console.log('Listening to port', port);
});
