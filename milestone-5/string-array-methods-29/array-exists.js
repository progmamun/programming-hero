function megaFriend(friends) {
  if (Array.isArray(friends) == false) {
    return 'Please provide an array of strings';
  }
  let mega = friends[0];
  for (const friend of friends) {
    if (friend.length > mega.length) {
      mega = friend;
    }
  }
  return mega;
}

const friends = ['Lion', 'lion', 'tigers', 'bear', 'cat', 'dog'];
const myBigBuddy = megaFriend(1245);
// console.log(myBigBuddy);

// indexOf
if (friends.indexOf('fox') != -1) {
  // console.log('fox exists');
} else {
  console.log("fox doesn't exists");
}
// includes
if (friends.includes('Lion')) {
  console.log('Lion exits using includes');
}

// concat
const first = [1, 3, 5];
const second = [4, 6, 8, 9];
const combined = first.concat(second);
console.log(combined);
