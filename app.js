/*
    Need to have initial values set and stored in variables
*/
let displayInitialVal = "0";
let previousValue = "";
let newValue = "";
let resultValue = "";
let operator = "";
let decimalClicked = false;

////////////// QUERY SELECTORS ///////////////////////

// all number btns
const numberBtns = document.querySelectorAll("[data-number]");

//  operator btns
const operatorBtn = document.querySelectorAll("[data-operation]");

// clear btn
const clearBtn = document.querySelector("[data-clear]");

// equals btn
const equalsBtn = document.querySelector("[data-equals]");

/////////////////////

///////////////////// DISPLAY //////////////////////////
const display = document.querySelector(".calculator__display");

let displayedNum = (display.innerText = displayInitialVal);

///////////////////// FUNCTIONS ////////////////////////

// number button function -

const numBtnClicked = (num) => {
  const number = num.target.value;

  if (resultValue) {
    newValue = number;
  } else if (number === ".") {
    if (decimalClicked != true) {
      newValue += number;
      decimalClicked = true;
    }
  } else {
    newValue += number;
  }
  display.textContent = newValue;
  console.log(newValue);
};

// operator button function

const operatorBtnClicked = (e) => {};

// clear button function

const clearBtnClicked = () => {
  previousValue = "";
  newValue = "";
  resultValue = "";
  operator = "";
  decimalClicked = false;
  displayedNum = display.innerText = displayInitialVal;
};

///////////////////// EVENT LISTENERS /////////////////////////////////////////
numberBtns.forEach((number) => number.addEventListener("click", numBtnClicked));
clearBtn.addEventListener("click", clearBtnClicked);

equalsBtn.addEventListener("click", operatorBtnClicked);

operatorBtn.forEach((operator) => operator.addEventListener("click", operatorBtnClicked));
