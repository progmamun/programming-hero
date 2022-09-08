const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
const toolsRoutes = require('./routes/v1/tools.route.js');
const errorHandler = require('./middleware/errorHandler');
const { connectToServer } = require('./utils/dbConnect');

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');

// app.use(viewCount);

// Apply the rate limiting middleware to all requests
// app.use(limiter);

connectToServer((err) => {
  if (!err) {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } else {
    console.log(err);
  }
});

app.use('/api/v1/tools', toolsRoutes);

app.get('/', (req, res) => {
  // res.send("Hello World");
  // res.sendFile(__dirname + "/public/index.html");
  res.render('home.ejs', {
    id: 5,
    user: {
      name: 'test',
    },
  });
});

app.all('*', (req, res) => {
  res.send('NO route found.');
});

app.use(errorHandler);

process.on('unhandledRejection', (error) => {
  console.log(error.name, error.message);
  app.close(() => {
    process.exit(1);
  });
});
