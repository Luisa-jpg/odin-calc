let userInput ="";
let nextOp = "";
let lastResult;

const opRegEx = /(?<=\d)(\^|\/|x|\-|\+)(?=\d|\-)/g;
const numRegEx = /(?<!\d)\-*\d+\.*\d*/g;

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

  const num = userInput.match(numRegEx);
  const op = userInput.match(opRegEx);

  switch (op[0]) {
    case '+': result = add(+num[0], +num[1]); break;
    case '-': result = subtract(+num[0], +num[1]); break;
    case 'x': result = multiply(+num[0], +num[1]); break;
    case '/': result = divide(+num[0], +num[1]); break;
    case '^': result = power(+num[0], +num[1]); break;
  };

  if (result.toString().length > 12) result = round(result);
  userInput = result.toString() + nextOp.toString();
  nextOp = "";
  return result;
};

function clear() {
  displayText.textContent = "";
  userInput = "";
  nextOp = "";
  floatBtn.disabled = false;
};

function round(num) {
  let count = num.toString();
  if (count.includes(".")) {
    let floatInd = count.indexOf(".");
    return num.toFixed(12 - floatInd -1);
  } else {
    return num;
  };
};

function btnEvent (e) {
  if (e.target.matches(".operator-btn")) {
      floatBtn.disabled = false;
      if (opRegEx.test(userInput)) {
        nextOp = e.target.textContent;
        lastResult = operate();
      } else {
        userInput += e.target.textContent;
      };
      displayText.textContent = userInput;
  } else if (e.target === floatBtn) {
      userInput += e.target.textContent;
      displayText.textContent = userInput;
      floatBtn.disabled = true;

  } else { //number button is clicked
    if (lastResult == userInput) {
      userInput = e.target.textContent;
    } else {
      userInput += e.target.textContent;
    };
    displayText.textContent = userInput;
  };
};

const displayText = document.querySelector(".display p");

const btnsWrapper = document.querySelector(".buttons-wrapper");
const operatorBtnList = document.querySelectorAll(".operator-btn");
const numBtnList = document.querySelectorAll(".num-btn");

const btnC = document.querySelector("#c");
const btnAC = document.querySelector("#ac");
const floatBtn = document.querySelector("#float");

btnsWrapper.addEventListener('click', (e) => {
  if (e.target.matches("button")) {
    if (e.target === btnAC) {
      clear();
    } else if (e.target === btnC) {
      userInput = userInput.slice(0, -1);
      displayText.textContent = userInput;
    } else if (e.target.textContent === "=") {
        lastResult = operate();
        displayText.textContent = userInput;
    } else {//if (userInput.length < 12) {
       btnEvent(e);
    };
  };
});

/*
window.addEventListener('keydown', (e) => {
  switch (e.key) {
    case "Escape":
      clear();
      break;

    case "Backspace":
    case "Del":
      userInput = userInput.slice(0, -1);
      displayText.textContent = userInput;
      break;
    
    case "=":
      lastResult = operate();
      displayText.textContent = userInput;
      break;

    case "+":
    case "-":
    case "/":
    case "*":
    case "^":
      if (userInput.length < 12) {
        if (opRegEx.exec(userInput) !== null) {
          nextOp = e.key.textContent;
          lastResult = operate();
          displayText.textContent = userInput;
        } else {
          userInput += e.key.textContent;
          displayText.textContent = userInput;
        };
      };
      break;
    
    case ".":
      if (!userInput.includes(".") && userInput.length < 12) {
        userInput += e.key.textContent;
        displayText.textContent = userInput;
      };
      break;

    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "0":
      console.log(userInput);
      if (userInput.length < 12) {
        if (lastResult == userInput) {
          userInput = e.key.textContent;
        } else {
          userInput += e.key.textContent;
        };
        displayText.textContent = userInput;
      };
      break;
    };

  console.log(e.key);
});*/