////////////// QUERY SELECTORS ///////////////////////

// all number btns
const numberBtns = document.querySelectorAll("[data-number]");

//  operator btns
const operatorBtn = document.querySelectorAll("[data-operation]");

// clear btn
const clearBtn = document.querySelector("[data-clear]");

// equals btn
const equalsBtn = document.querySelector("[data-equals]");

// delete btn
// const deleteBtn = document.querySelector("[data-delete");

/////////////////////

///////////////////// DISPLAY //////////////////////////
const output = document.querySelector(".calculator__output--current-value");
const previousOutput = document.querySelector(".calculator__output--previous-value");

///////////////////////////////////////////////////////

//  Initial values set and stored in variables

let displayInitialVal = "0";
let currentValue = "";
let previousValue = "";
let resultValue = "";
let operation = undefined;
let decimalClicked = false;
output.innerText = displayInitialVal;
previousOutput.innerText = "";
///////////////////// FUNCTIONS ////////////////////////

// CLEAR FUNCTION
const clearBtnClicked = () => {
  currentValue = "";
  previousValue = "";
  resultValue = "";
  operation = undefined;
  decimalClicked = false;
  output.innerText = displayInitialVal;
  previousOutput.innerText = "";
};

// ADD NUMBER FUNCTION
const numBtnClicked = (num) => {
  const number = num.target.value;

  if (number === "." && currentValue.includes(".")) return;
  currentValue += number;

  output.innerText = currentValue;
  console.log(typeof currentValue);
};

// DELETE FUNCTION

// OPERATOR FUNCTION
const operatorBtnClicked = (operator) => {
  if (currentValue === "") return;
  operation = operator.target.value;
  previousValue = currentValue;
  currentValue = "";

  previousOutput.innerText += `${previousValue}  ${operation}`;
  output.innerText = currentValue;
  console.log(typeof previousValue);
};

// EQUALS (computation) FUNCTION
const equalsBtnClicked = () => {
  floatPrevValue = parseFloat(previousValue);
  floatCurrentValue = parseFloat(currentValue);
  if (isNaN(floatPrevValue) || isNaN(floatCurrentValue)) return;

  console.log(floatCurrentValue);
  console.log(floatPrevValue);

  switch (operation) {
    case "/":
      resultValue = floatPrevValue / floatCurrentValue;
      break;
    case "x":
      resultValue = floatPrevValue * floatCurrentValue;
      break;
    case "-":
      resultValue = floatPrevValue - floatCurrentValue;
      break;
    case "+":
      resultValue = floatPrevValue + floatCurrentValue;
      break;
    default:
      return;
  }

  currentValue = resultValue;
  operation = undefined;
  previousValue = "";

  output.innerText = resultValue;
  previousOutput.innerText = "";
};

///////////////////// EVENT LISTENERS /////////////////////////////////////////

// number btns
numberBtns.forEach((number) => number.addEventListener("click", numBtnClicked));
//  clear btn
clearBtn.addEventListener("click", clearBtnClicked);
// equals btn
equalsBtn.addEventListener("click", equalsBtnClicked);
// operator btns
operatorBtn.forEach((operator) => operator.addEventListener("click", operatorBtnClicked));
// delete btn
// deleteBtn.addEventListener("click", deleteBtnClicked);
