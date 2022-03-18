import React from 'react';
import './Country.css';

const Country = props => {
  // console.log(props.country.area);
  const { area, region, population, name } = props.country;
  return (
    <div className="country bg-info">
      <h2>{name.common}</h2>
      <img src={props.country.flags.png} alt="" />
      <h4>population: {population}</h4>
      <p>
        <small>Region: {region}</small>
      </p>
      <p>Area: {area}</p>
    </div>
  );
};

export default Country;
