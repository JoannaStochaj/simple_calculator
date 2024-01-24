const addButton = document.querySelector('input[value="+"]');
const substractButton = document.querySelector('input[value="-"]');
const multiplyButton = document.querySelector('input[value="*"]');
const divideButton = document.querySelector('input[value="/"]');
const clearButton = document.querySelector('input[value="C"]');

const number1Input = document.getElementById("number1");
const number2Input = document.getElementById("number2");
const resultInput = document.querySelector(".result");

addButton.addEventListener("click", add);
substractButton.addEventListener("click", substract);
multiplyButton.addEventListener("click", multiply);
divideButton.addEventListener("click", divide);
clearButton.addEventListener("click", clearAll);

function add() {
  const num1 = parseFloat(number1Input.value);
  const num2 = parseFloat(number2Input.value);
  const result = num1 + num2;
  resultInput.value = result;
}

function substract() {
  const num1 = parseFloat(number1Input.value);
  const num2 = parseFloat(number2Input.value);
  const result = num1 - num2;
  resultInput.value = result;
}

function multiply() {
  const num1 = parseFloat(number1Input.value);
  const num2 = parseFloat(number2Input.value);
  const result = num1 * num2;
  resultInput.value = result;
}

function divide() {
  const num1 = parseFloat(number1Input.value);
  const num2 = parseFloat(number2Input.value);

  if (num2 !== 0) {
    const result = num1 / num2;
    resultInput.value = result;
  } else {
    resultInput.value = "Nie można dzielić przez 0!";
  }
}

function clearAll() {
  number1Input.value = "";
  number2Input.value = "";
  resultInput.value = "";
}
