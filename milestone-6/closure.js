function stopWatch() {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
}

let clock1 = stopWatch();
// console.log(clock1());
// console.log(clock1());
// console.log(clock1());

// ===== more closure =====///
/*
const bank = owner => {
  balance = 0;
  return amount => {
    // balance = balance + amount;
    balance += amount;
    return balance;
  };
};

const MofijBank = bank('Mofij');
console.log(MofijBank(100));
console.log(MofijBank(300));
console.log(MofijBank(500));
*/

const bank = owner => {
  balance = 0;
  return {
    deposit: amount => {
      // balance = balance + amount;
      balance += amount;
      return balance;
    },
    withdraw: amount => {
      // balance = balance - amount;
      balance -= amount;
      return balance;
    },
  };
};
const MofijBank = bank('Mofij');
console.log(MofijBank.deposit(100));
console.log(MofijBank.deposit(300));
console.log(MofijBank.deposit(500));
console.log(MofijBank.withdraw(50));
console.log(MofijBank.withdraw(100));
