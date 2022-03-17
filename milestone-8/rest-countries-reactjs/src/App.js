import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}

function LoadCountries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data));
  });
  return (
    <div>
      <h1>Visiting Every Country of the world!!!</h1>
      <p>Available Country: {countries.length}</p>
    </div>
  );
}

export default App;
