const calculator = {
  displayValue: '0',
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null
};

function updateDisplay() {
  const display = document.querySelector('.calculator-screen');
  display.value = calculator.displayValue;
}

updateDisplay();

const keys = document.querySelector('.btn');
keys.addEventListener('click', event => {
  const { target } = event;
  if (!target.matches('btn')) {
    return;
  }

  if (target.classList.contains('btn orange')) {
    console.log('operator', target.value);
    return;
  }

  if (target.classList.contains('btn decimal')) {
    console.log('decimal', target.value);
    return;
  }

  if (target.classList.contains('btn clear')) {
    console.log('clear', target.value);
    return;
  }

  console.log('digit', target.value);
});
