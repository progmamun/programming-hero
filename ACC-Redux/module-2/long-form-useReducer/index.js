//* Immutability

let player = [{ name: "Shakib" }, { name: "Tamim" }];

console.log(player);

player = [...player, { name: "Mashrafi" }];

console.log(player);
