'use strict';
/*
chairWood = 3cft/chair
tableWood = 10cft/table
bedWood = 50cft/table
*/
function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
  const perChairWood = 3;
  const perTableWood = 10;
  const perBedWood = 50;
  // wood calculation
  const chairWoodQuantity = chairQuantity * perChairWood;
  const tableWoodQuantity = tableQuantity * perTableWood;
  const bedWoodQuantity = bedQuantity * perBedWood;

  const totalQuantity = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
  return totalQuantity;
}

const firstOption = woodCalculator(1, 3, 5);
console.log(firstOption);
