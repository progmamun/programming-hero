const student = {
  id: 101,
  money: 5000,
  name: 'RJ kibria',
  major: 'Bangla',
  subjects: ['english', 'Bangla', 'ecomonics', 'calculus'],
  bestFriend: {
    name: 'kibria',
    major: 'Bangla',
  },
  takeExam: function () {
    console.log(this.name, 'taking exam');
  },
  treatDey: function (expense, boksis) {
    this.money = this.money - expense - boksis;
    return this.money;
  },
};

student.takeExam();
const remaining1 = student.treatDey(900, 100);
const remaining2 = student.treatDey(900, 50);
console.log(remaining1);
