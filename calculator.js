let prevResult = 0;
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
    input.value += button.value;
  });
});

equal.addEventListener('click', () => {
  const inputValue = input.value;
  try {
    const solution = eval(inputValue);
    input.value = Number.isInteger(solution) ? solution : solution.toFixed(2);
    prevResult = solution;
  } catch (error) {
    alert('Invalid input');
  }
});

clear.addEventListener('click', () => {
  input.value = '';
});

del.addEventListener('click', () => {
  input.value = input.value.slice(0, -1);
});

