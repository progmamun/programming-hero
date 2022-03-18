import React from 'react';
import './Country.css';

const Country = props => {
  // console.log(props.country.area);
  const { area, region, population, name } = props.country;
  return (
    <div className="country">
      <h2>Country Name:{name.common}</h2>
      <h4>population: {population}</h4>
      <p>
        <small>Region: {region}</small>
      </p>
      <p>Area: {area}</p>
      <img src={props.country.flags.png} alt="" />
    </div>
  );
};

export default Country;
