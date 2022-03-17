import './App.css';
import {useEffect, useState} from 'react';

function App() {
  /*
  const products = [
    {name: 'laptop', price: 5300},
    {name: 'tv', price: 5300},
    {name: 'iphone', price: 5300},
    {name: 'watch', price: 5300},
    {name: 'Google Alexa', price: 5300},
    {name: 'pc', price: 5300}
  ]
  */
  return (
    <div className="App">
      <ExternalUsers></ExternalUsers>
      {/* <Counter></Counter> */}
      {/* {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      } */}
      {/* <Product name='laptop' price='47000'></Product> */}
    </div>
  );
}
function ExternalUsers() {
  
    const [users, setUsers] = useState([]);
    // useEffect(() => {}, [])
    // const myfunc = () => {}
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
    }, []);

    return (
      <div>
        <h2>External Users</h2>
        {
          users.map(user => <User name={user.name} email={user.email}></User>)
        }
      </div>
  )
}
function User(props) {
  return (
    <div style={{border: '2px solid blue', margin: '20px'}}> 
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
    </div>
  )
}
/*
function Counter() {
  const [count, setCount] = useState(55);

  const increseCount = () => setCount(count + 1);
  const decriseCount = () => setCount(count - 1);
  /*const increseCount = () => {
    const newcount = count + 1;
    setCount(newcount);
  };*/
  /*
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={increseCount}>Increase</button>
      <button onClick={decriseCount}>Decrese</button>
    </div>
  );
}
*/


/*
function Product(props) {
  return (
    <div className="product">
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>
    </div>
  );
}*/

export default App;
