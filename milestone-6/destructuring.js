const fish = {
  id: 58,
  name: 'King Hilsha',
  price: 9000,
  phone: '01799399381',
  address: 'Chandpur',
  address: 'silver',
};
const { phone, price, dress, id } = fish;

// console.log(phone, price);

const company = {
  name: 'GP',
  ceo: { id: 1, name: 'Ajmol', food: 'Birany' },
  web: {
    work: 'website-development',
    employee: 22,
    framework: 'react',
    tech: { first: 'html', second: 'css', third: 'js' },
  },
};

// const work = company.web.work;
// const framework = company.web.framework;
const { work, framework } = company.web;
const { food } = company.ceo;
const { second, third } = company.web.tech;
console.log(work, framework, food);
