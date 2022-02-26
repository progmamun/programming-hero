const bottle = { color: 'yellow', hold: 'water', price: 50, isCleaned: true };

// getting all properties names
const keys = Object.keys(bottle);
// console.log(keys);

//====== get all value =====
const values = Object.values(bottle);
// console.log(values);

const pairs = Object.entries(bottle);
// console.log(pairs);

Object.seal(bottle);
// Object.freeze(bottle);

delete bottle.isCleaned;
console.log(bottle);
