const kibria = {
  id: 101,
  money: 5000,
  name: 'RJ kibria',
  treatDey: function (expense) {
    this.money = this.money - expense;
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
// kibria.treatDey(100);

const heroTreatDey = kibria.treatDey.bind(heroBalam);
heroTreatDey(500);
heroTreatDey(200);

kibria.treatDey(400);
const normalTreatDey = kibria.treatDey.bind(normalGolam);
normalTreatDey(2000);
