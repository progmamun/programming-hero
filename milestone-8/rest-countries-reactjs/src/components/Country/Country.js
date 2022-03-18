import React from 'react';
import './Country.css';

const Country = props => {
  // console.log(props.country.area);
  const { area } = props.country;
  return (
    <div className="country">
      <h2>Country Name:{props.country.name.common}</h2>
      <h4>population: {props.country.population}</h4>
      <p>
        <small>Region: {props.country.region}</small>
      </p>
      <p>Area: {area}</p>
      <img src={props.country.flags.png} alt="" />
    </div>
  );
};

export default Country;
