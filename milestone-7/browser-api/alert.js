const askPicnic = () => {
  const res = confirm('Are you going to picnic?');
  console.log(res);

  if (res === true) {
    alert('true');
  } else {
    console.log('false');
  }
};

const askName = () => {
  const name = prompt('What is your name?');

  if (name) {
    console.log(name);
  }
};
