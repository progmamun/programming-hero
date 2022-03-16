import './App.css';

const singers = [
  { name: 'Dr. Mahfuz', job: 'singer' },
  { name: 'Dr. Mahfuz', job: 'singer' },
  { name: 'Dr. Mahfuz', job: 'singer' },
  { name: 'Dr. Mahfuz', job: 'singer' },
  { name: 'Dr. Mahfuz', job: 'singer' },
];

function App() {
  const products = [
    {name: 'laptop', price: 5300},
    {name: 'tv', price: 5300},
    {name: 'iphone', price: 5300},
    {name: 'watch', price: 5300},
    {name: 'Google Alexa', price: 5300},
    {name: 'pc', price: 5300}
  ]
  return (
    <div className="App">
      {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }
      {/* <Product name='laptop' price='47000'></Product> */}
    </div>
  );
}

function Product(props) {
  return (
    <div className="product">
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>
    </div>
  );
}

export default App;
