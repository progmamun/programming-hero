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
