const removeItem = item => {
  const storedTracker = localStorage.getItem('checka-tracker');
  if (storedTracker) {
    const storedObject = JSON.parse(storedTracker);
    delete storedObject[item];
    localStorage.setItem('checka-tracker', JSON.stringify(storedObject));
  }
};
