import React from 'react';
import './Country.css';

const Country = props => {
  return (
    <div className="country">
      <h2>Country Name:{props.name}</h2>
      <h4>population: {props.population}</h4>
      <p>Area: {props.area}</p>
    </div>
  );
};

export default Country;
