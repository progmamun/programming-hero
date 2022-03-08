const student = {
  name: 'Sakib Khan',
  age: 23,
  movies: ['king khan', 'Dhaker Mastan'],
};
// 1. stringify
const studentJSON = JSON.stringify(student);
console.log(studentJSON);

// 2. Parse
const studentObj = JSON.parse(studentJSON);
console.log(studentObj);
