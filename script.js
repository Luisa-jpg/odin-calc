let userInput ="";
let nextOp = "";
const opRegEx = /\^|\/|\x|\-|\+/;
let lastResult;

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

function operate() {
  let result;
  let num = userInput.split(opRegEx);
  let op = opRegEx.exec(userInput)[0];

  switch (op) {
    case '+': result = add(+num[0], +num[1]); break;
    case '-': result = subtract(+num[0], +num[1]); break;
    case 'x': result = multiply(+num[0], +num[1]); break;
    case '/': result = divide(+num[0], +num[1]); break;
    case '^': result = power(+num[0], +num[1]); break;
  };

  userInput = result.toString() + nextOp.toString();
  nextOp = "";
  return result;
};

function clear() {
  displayText.textContent = "";
  userInput = "";
  nextOp = "";
};

const displayText = document.querySelector(".display p");

const btnsWrapper = document.querySelector(".buttons-wrapper");
const operatorBtnList = document.querySelectorAll(".operator-btn");
const numBtnList = document.querySelectorAll(".num-btn");

const btnC = document.querySelector("#c");
const btnAC = document.querySelector("#ac");
const floatBtn = document.querySelector("#float");

btnsWrapper.addEventListener('click', (e) => {
  if (e.target !== e.currentTarget) {
    
    if (e.target === btnAC) {
      clear();
    } else if (e.target === btnC) {
      userInput = userInput.slice(0, -1);
      displayText.textContent = userInput;
    } else if (e.target.textContent === "=") {
      lastResult = operate();
      displayText.textContent = userInput;
    } else if (Array.from(operatorBtnList).includes(e.target)) {
        if (opRegEx.exec(userInput) !== null) {
          nextOp = e.target.textContent;
          lastResult = operate();
          displayText.textContent = userInput;
        } else {
          userInput += e.target.textContent;
          displayText.textContent = userInput;
        };
    } else if (e.target === floatBtn) {
        if (!userInput.includes(".")) {
          userInput += e.target.textContent;
          displayText.textContent = userInput;
        }
    } else { //number button is clicked
      if (lastResult == userInput) {
        userInput = e.target.textContent;
      } else {
        userInput += e.target.textContent;
      };
      displayText.textContent = userInput;
    };
  };
});