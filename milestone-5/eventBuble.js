document
  .getElementById('second-item')
  .addEventListener('click', function (event) {
    // event.stopPropagation();
    event.stopImmediatePropagation();
  });
