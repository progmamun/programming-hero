'use strict';

function animalCount(miles) {
  const animalDensityFirst10Miles = 10;
  const animalDensitySecond50Miles = 50;
  if (miles <= 10) {
    const count = miles * animalDensityFirst10Miles;
    return count;
  } else if (miles <= 20) {
    const first10 = 10 * animalDensityFirst10Miles;
    const restMiles = miles - 10;
    const secondDenseAnimals = restMiles * animalDensitySecond50Miles;
    const totalAnimals = first10 + secondDenseAnimals;
    return totalAnimals;
  }
}
const animal = animalCount(19);
console.log(animal);
