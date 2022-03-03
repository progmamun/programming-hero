let seconds = 0;

const timeId = setInterval(() => {
  seconds++;
  console.log(seconds);
  if (seconds > 15) {
    clearInterval(timeId);
  }
}, 3000);
