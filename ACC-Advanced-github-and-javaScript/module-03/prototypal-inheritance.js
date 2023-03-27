"use strict";

const Car = function (brand, price, stock) {
  this.brand = brand;
  this.price = price;
  this.stock = stock;
  //! Avoid this type of action
  /*  this.totalProfit = function() {
        return;
    } */
};
//* New Empty object {} is created.
//* Function is Called and this = {}
//* empty object is linked to prototype
//* Object is returned.

const m8 = new Car("BMW", 10, 5);
const modelS = new Car("Tesla", 15, 2);

console.log(m8);
console.log(modelS);

Car.prototype.totalProfit = function () {
  return this.price * this.stock;
};
console.log(m8.totalProfit());
