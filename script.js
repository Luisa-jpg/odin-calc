let result;
let userInput ="";
let nextOp = "";

function add(num1, num2) {
  return num1 + num2;
};

function subtract(num1, num2) {
	return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
  };

function divide(num1, num2) {
    return num1 / num2;
  };

function power(num1, num2) {
  return num1 ** num2;
};

function operate(num1, num2, operator) {
  let result;
  if (num1 === null || num2 === null || operator === null) {
    alert (" ERROR ");
  } else {
    switch (operator) {
      case '+': result = add(num1, num2); break;
      case '-': result = subtract(num1, num2); break;
      case '*': result = multiply(num1, num2); break;
      case '/': result = divide(num1, num2); break;
      case '^': result = power(num1, num2); break;
    };
    clear();
    displayText.textContent = result;
    return result;
  };
};

function clear() {
  displayText.textContent = "";
  userInput = "";
  nextOp = "";
};

const displayText = document.querySelector(".display p");

const btnsWrapper = document.querySelector(".buttons-wrapper");
const operatorBtnList = Array.from(document.querySelectorAll(".operator-btn"));
const numBtnList = Array.from(document.querySelectorAll(".num-btn"));

const btnC = document.querySelector("#c");
const btnAC = document.querySelector("#ac");
const floatBtn = document.querySelector("#float");

btnsWrapper.addEventListener('click', (e) => {
  if (e.target !== e.currentTarget) {
    if (e.target === btnAC) {
      clear();
    } else if (e.target === btnC) {
      userInput = userInput.slice(0, -1);
      displayText.textContent = displayText.textContent.slice(0, -1);
    }
    else if (e.target.textContent === "=") {
      operate();
    } else {
      displayText.textContent += e.target.textContent;
      userInput += e.target.textContent;
    };
  };
});