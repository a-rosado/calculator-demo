let equalPressed = false;
const buttonInput = document.querySelectorAll('.input-button');
const input = document.getElementById('input');
const equal = document.getElementById('equal');
const clear = document.getElementById('clear');
const del = document.getElementById('del');

window.onload = () => {
  input.value = '';
};

Array.from(buttonInput).forEach((button) => {
  button.addEventListener('click', () => {
    if (equalPressed) {
      input.value = '';
      equalPressed = false;
    }
    input.value += button.value;
  });
});

equal.addEventListener('click', () => {
  equalPressed = true;
  const inputValue = input.value;
  try {
    const solution = eval(inputValue);
    input.value = Number.isInteger(solution) ? solution : solution.toFixed(2);
  } catch (error) {
    alert('You cant do that stupid');
  }
});

clear.addEventListener('click', () => {
  input.value = '';
  equalPressed = false;
});

del.addEventListener('click', () => {
  input.value = input.value.slice(0, -1);
});
