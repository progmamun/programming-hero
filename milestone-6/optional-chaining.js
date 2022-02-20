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

// console.log(company.web.tech.third);
console.log(company?.web?.tech?.third);
console.log(company?.backend?.tech.third); // ? - optional chaining
