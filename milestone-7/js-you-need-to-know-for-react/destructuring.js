// 1. Array destructuring
const numbers = [42, 65];

const [x, y] = numbers;

function boxify(num1, num2) {
  const nums = [num1, num2];
  return nums;
}
console.log(boxify(90, 35));

// 2. object destructuring
const employee = {
  ide: 'VS Code',
  designation: 'Developer',
  machine: 'mac',
  language: ['js', 'go', 'python'],
  specification: {
    height: 66,
    weight: 67,
    address: 'Pabna',
    drink: 'Water',
    watch: {
      color: 'black',
      price: 500,
      brand: 'Garmin',
    },
  },
};

const { machine, ide } = employee;
const { weight, address } = employee.specification;
const { brand } = employee.specification.watch;
