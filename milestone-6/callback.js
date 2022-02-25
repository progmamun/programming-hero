function welcomeMessage(name, greetHandler) {
  // console.log(greetHandler);
  greetHandler(name);
}
// const names = ['tom', 'brady'];
// const myObj = {name: 'tom', age: 19};

function greetMorning(name) {
  console.log('Good morning', name);
}
welcomeMessage('Tom hanks', greetMorning);
