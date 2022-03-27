// const fruits = [{name: 'pineapple'}, {name: 'mango'}, {name: 'papaya'}]
// const election = ['razzak', 'alomgir', 'jayed', 'jayed', 'jayed', 'nepun', 'jayed']
// const election2 = {
//     razzak: 1,
//     alomgir: 1,
//     jashim: 1,
//     jayed: 4
// }

let db = {};

const addToDb = item => {
  // three ways to add a property to an object
  // db.alom = 1;
  // db['alom'] = 1;
  // db[item] = 1;
  const storedTracker = localStorage.getItem('checka-tracker');
  if (storedTracker) {
    db = JSON.parse(storedTracker);
  }

  if (item in db) {
    db[item] = db[item] + 1;
  } else {
    db[item] = 1;
  }

  localStorage.setItem('checka-tracker', JSON.stringify(db));
};
const removeItem = item => {
  const storedTracker = localStorage.getItem('checka-tracker');
  if (storedTracker) {
    const storedObject = JSON.parse(storedTracker);
    delete storedObject[item];
    localStorage.setItem('checka-tracker', JSON.stringify(storedObject));
  }
};
