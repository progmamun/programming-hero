class Support {
  name;
  designation = 'Support Web Dev';
  address = 'BD';
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
  startSession() {
    console.log(this.name, 'start a support session');
  }
}

const ammir = new Support('Aamir Khan', 'BD');
const salman = new Support('Solaiman Khan', 'Dubai');
aamir.startSession();
salman.startSession();
console.log(ammir);
console.log(salman);
