// function
function handleJustFunctionClick() {
  const p = document.getElementById('click-method');
  p.innerText = 'Set by using Function';
}

// direct
document.getElementById('light-blue').addEventListener('click', function () {
  document.body.style.backgroundColor = 'lightblue';
});

// direct with input field
document.getElementById('update-name').addEventListener('click', function () {
  const nameField = document.getElementById('name-field');

  const p = document.getElementById('click-method');
  p.innerText = nameField.value;
  nameField.value = '';
});
