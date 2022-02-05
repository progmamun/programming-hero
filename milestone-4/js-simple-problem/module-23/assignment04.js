'use strict';

// Problem 01:
function anaToVori(ana) {
  let gold = ana / 16;
  return gold;
}

let vori = anaToVori(16);
// console.log(vori);

// Problem 02:
function pandaCost(singaraQuantity, somusaQuantity, jilapiQuantity) {
  const perSingaraPrice = 7;
  const perSomusaPrice = 10;
  const perJilapiPrice = 15;

  const num1 = singaraQuantity * perSingaraPrice;
  const num2 = somusaQuantity * perSomusaPrice;
  const num3 = jilapiQuantity * perJilapiPrice;

  const totalQuantity = num1 + num2 + num3;
  return totalQuantity;
}

const order = pandaCost(1, 1, 1);
// console.log(order);

// Problem 03:

function picnicBudget(people) {
  const people1 = 5000;
  const people2 = 4000;
  const people3 = 3000;
  if (people <= 100) {
    const count = people * people1;
    return count;
  } else if (people <= 200) {
    const first100 = 100 * people1;
    const restPeople = people - 100;
    const secondPeople = restPeople * people2;
    const totalPeople = first100 + secondPeople;
    return totalPeople;
  } else if (people <= 500) {
    const first100 = 100 * people1;
    const second200 = 100 * people2;
    const restPeople = people - 200;
    const restPeopleAll = restPeople * people3;
    const totalAnimals = first100 + second200 + restPeopleAll;
    return totalAnimals;
  } else {
    console.log('Please Enter Valid Number');
  }
}
const totalPeopleCost = picnicBudget(501);
console.log(totalPeopleCost);
