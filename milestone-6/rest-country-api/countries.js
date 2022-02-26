'use strict';
const loadCountries = () => {
  fetch('https://restcountries.com/v3.1/all')
    // fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
};
loadCountries();

const displayCountries = counties => {
  const countriesDiv = document.getElementById('countries');

  counties.forEach(country => {
    // console.log(country);
    const div = document.createElement('div');
    div.classList.add('country');
    div.innerHTML = `
      <h3>${country.name.common}</h3>
      <p>${country.capital}</p>
      <button onclick="loadCountryByName('${country.name.common}')">Details</button>
    `;
    countriesDiv.appendChild(div);
    // const h3 = document.createElement('h3');
    // h3.innerText = country.name;
    // div.appendChild(h3);
    // const p = document.createElement('p');
    // p.innerText = country.capital;
    // div.appendChild(p);
    // countriesDiv.appendChild(div);
  });
};

const loadCountryByName = name => {
  // console.log(name);
  const url = `https://restcountries.com/v3.1/name/${name}`;
  fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetail(data));
};

const displayCountryDetail = country => {
  // console.log(country?.name?.common);
  const countryDiv = document.getElementById('country-details');
  countryDiv.innerHTML = `
  <h4>${country[0].name.common}</h4>
  <p>population: ${country[0].population}</p>
  <img width="350px" height="350px" src="${country[0].flags.png}"></img> 
  `;
};
