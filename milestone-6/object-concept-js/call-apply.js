const kibria = {
  id: 101,
  money: 5000,
  name: 'RJ kibria',
  treatDey: function (expense, boksis, tax) {
    this.money = this.money - expense - boksis - tax;
    console.log('Here55', this);
    return this.money;
  },
};

const heroBalam = {
  id: 102,
  money: 6000,
  name: 'Hero Balam',
};

const normalGolam = {
  id: 102,
  money: 7000,
  name: 'Normal Balam',
};

// call
kibria.treatDey.call(heroBalam, 500, 100, 50);
kibria.treatDey.call(heroBalam, 300, 50, 30);

// apply
kibria.treatDey.apply(heroBalam, [500, 100, 40]);
