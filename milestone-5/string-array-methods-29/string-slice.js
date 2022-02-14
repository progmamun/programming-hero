// === split ==== //
const anthem = 'Amer sonar bangla';
const words = anthem.split(' ');
const withoutA = anthem.split('a');
// console.log(words);

//==== slice ====//
const smallSlice = anthem.slice(5, 13);
// console.log(smallSlice);

//===== substr====//
const anotherPart = anthem.substr(11, 8);
// console.log(anotherPart);

// === substring === // 14 no porjonto asba.
const anotherAnotherPart = anthem.substring(11, 15);
// console.log(anotherAnotherPart);

// === concat === //
const first = 'Amader';
const second = 'City';
// const fullString = first + second;
const fullString = first.concat(second).concat('abc').concat('RJ Kibria');
console.log(fullString);

// === join() === new string create//
const words2 = ['alim', 'mamun', 'kibira', 'akul'];
// const allJoined = words2.join('');
// const allJoined = words2.join(' ');
// const allJoined = words2.join(',');
// console.log(allJoined);
