// import { useEffect, useState } from 'react';
import './App.css';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
      {/* <LoadCountries></LoadCountries> */}
    </div>
  );
}

/* function LoadCountries() {
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
      {
        // countries.map(country => (
        //   <p>{country.name.common}</p>
        // ))
        countries.map(country => (
          <Country
            name={country.name.common}
            population={country.population}
          ></Country>
        ))
      }
    </div>
  );
}
function Country(props) {
  return (
    <dir>
      <h2>Name: {props.name}</h2>
      <h3>Population: {props.population}</h3>
    </dir>
  );
} */

export default App;
