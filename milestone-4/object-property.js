'use strict';

let computer = {
  price: 20000,
  storage: '156GB',
  color: 'white',
  processor: 'intel i7',
};
let priceProperty = 'price';
computer[priceProperty] = 19900;

computer.price = 2200;
computer['price'] = 2300;

console.log(computer);
