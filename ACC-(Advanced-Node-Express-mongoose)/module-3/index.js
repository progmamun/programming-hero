const express = require('express');
const cors = require('cors');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const nodemailer = require('nodemailer');

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '',
    pass: process.env.MAIL_PASS,
  },
});
function sendOrderMail(orders) {
  const { address, name, email, product, price, quantity } = orders;

  const mailOptions = {
    from: '',
    to: email,
    subject: `Your order  ${product} is successfully booked`,
    text: 'Your product will be shifted within 7 days',
    html: `
      <div> 
        <p>Hello, Sir</p>
        <h4>Your product will be shifted in this address ${address}</h4>
        <h4>Quantity: ${quantity}</h4>
        <h4>Total Price: ${price * quantity} Tk BDT.</h4>
        <p>Sincerely</p>
        <p>Total Car Care Ltd. </p>
        <h4 className="mt-5">Our Address</h4>
        <p>Muradpur ,Ctg</p>
        <p>Bangladesh</p>     
     
      </div>
    `,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log('something is wrong', err);
    } else {
      // console.log('Email sent', data);
    }
  });
}

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.roc0q.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    await client.connect();

    const toolsCollection = client.db('toolsManufacturer').collection('tools');
    const orderCollection = client.db('toolsManufacturer').collection('orders');
    const reviewCollection = client
      .db('toolsManufacturer')
      .collection('reviews');
    const userCollection = client.db('toolsManufacturer').collection('users');
    const profileCollection = client
      .db('toolsManufacturer')
      .collection('profile');
    const paymentCollection = client
      .db('toolsManufacturer')
      .collection('payments');

    // tools api
    app.get('/tools', async (req, res) => {
      const query = {};
      const result = await toolsCollection.find(query).toArray();
      res.send(result);
    });

    app.post('/tools', async (req, res) => {
      const tools = req.body;
      const result = await toolsCollection.insertOne(tools);
      res.send(result);
    });

    app.get('/tools/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await toolsCollection.findOne(query);
      res.send(result);
    });
    app.delete('/tools/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await toolsCollection.deleteOne(query);
      res.send(result);
    });

    // orders api
    app.post('/orders', async (req, res) => {
      const orders = req.body;
      const result = await orderCollection.insertOne(orders);
      console.log(orders);
      sendOrderMail(orders);
      res.send(result);
    });
    app.get('/orders', async (req, res) => {
      const email = req.query.email;
      if (email) {
        const query = { email: email };
        const cursor = orderCollection.find(query);
        const result = await cursor.toArray();
        res.send(result);
      } else {
        const query = {};
        const result = await orderCollection.find(query).toArray();
        res.send(result);
      }
    });

    app.get('/orders/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await orderCollection.findOne(query);
      res.send(result);
    });
    app.delete('/orders/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await orderCollection.deleteOne(query);
      res.send(result);
    });

    app.patch('/orders/:id', async (req, res) => {
      const id = req.params.id;
      const payment = req.body;
      const filter = { _id: ObjectId(id) };
      const updatedDoc = {
        $set: {
          paid: true,
          transactionId: payment.transactionId,
        },
      };
      adf;
      const result = await paymentCollection.insertOne(payment);
      const updateOrder = await orderCollection.updateOne(filter, updatedDoc);
      res.send(updateOrder);
    });

    app.post('/create-payment-intent', async (req, res) => {
      const service = req.body;
      const price = service.total;
      const amount = price * 100;
      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: 'usd',
        payment_method_types: ['card'],
      });
      res.send({ clientSecret: paymentIntent.client_secret });
    });

    app.post('/review', async (req, res) => {
      const review = req.body;
      const result = await reviewCollection.insertOne(review);
      res.send(result);
    });
    app.get('/review', async (req, res) => {
      const query = {};
      const result = await reviewCollection.find(query).toArray();
      res.send(result);
    });

    app.get('/user', async (req, res) => {
      const allUser = await userCollection.find().toArray();
      res.send(allUser);
    });

    app.delete('/user/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await userCollection.deleteOne(query);
      res.send(result);
    });

    app.put('/user/admin/:email', async (req, res) => {
      const email = req.params.email;
      const filter = { email: email };
      const updateDoc = {
        $set: { role: 'admin' },
      };
      const result = await userCollection.updateOne(filter, updateDoc);
      res.send(result);
    });

    app.get('/admin/:email', async (req, res) => {
      const email = req.params.email;
      const user = await userCollection.findOne({ email: email });
      const isAdmin = user.role === 'admin';
      res.send({ admin: isAdmin });
    });

    app.put('/user/:email', async (req, res) => {
      const email = req.params.email;
      const user = req.body;
      const filter = { email: email };
      const options = { upsert: true };
      const updateDoc = {
        $set: user,
      };
      const result = await userCollection.updateOne(filter, updateDoc, options);
      const token = jwt.sign(
        { email: email },
        process.env.ACCESS_SECRET_TOKEN,
        { expiresIn: '2h' }
      );
      res.send({ result, token });
    });

    app.post('/profile', async (req, res) => {
      const profile = req.body;
      const result = await profileCollection.insertOne(profile);
      res.send(result);
    });
    app.get('/profile', async (req, res) => {
      const email = req.query.email;
      const query = { email: email };
      const cursor = profileCollection.find(query);
      const result = await cursor.toArray();
      res.send(result);
    });
  } finally {
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
