const student = {
  name: 'Sakib Khan',
  age: 23,
  movies: ['king khan', 'Dhaker Mastan'],
};

const myVariable = 'age';

console.log(student.age); // direct by property
console.log(student['age']); // access via property name string
console.log(student[myVariable]); // access via property name in a variable
