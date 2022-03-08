const money = 80;
const myVar = 100;
let food;
if (money > 100) {
  food = 'Biryani';
} else {
  food = 'Cha biscuit';
}
// shortcut : ternary operator
let food1 = money > 100 ? 'Birayni' : 'Cha Biscuit';
console.log(food1);

let drink = money > 100 && myVar > 100 ? 'cooke' : 'filter water';
console.log(drink);
