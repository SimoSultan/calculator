

let inputScreen = document.getElementById('input-screen')
let outputScreen = document.getElementById('output-screen')
let buttons = document.getElementsByClassName('button')
for (let i = 0; i < buttons.length; i++) {
  const element = buttons[i];
  element.addEventListener('click', handleButtonClick)
}

// GLOBAL VARS FOR OPERATIONS
var num1 = ""
var num2 = ""
var operation = null

// the function on each button
// determine input and add relevant string/functions to global vars
function handleButtonClick() {
  // get button press
  let input = this.textContent
  switch (input) {
    case '+':
      // this is to not allow a user to be able to do 3 + 1 + 1
      // if operation var is not null, then clear the screen so they have to start again
      if (operation === null) {
        // add the function to the global and updated the input div
        operation = sum
        inputScreen.textContent += ` ${input} ` 
      } else {
        clear()
      }
      break;
    case '-':
      if (operation === null) {
        // add the function to the global and updated the input div
        operation = minus
        inputScreen.textContent += ` ${input} ` 
      } else {
        clear()
      }
      break;
    case '×':
      if (operation === null) {
        // add the function to the global and updated the input div
        operation = multiply
        inputScreen.textContent += ` ${input} ` 
      } else {
        clear()
      }
      break;
    case '÷':
      if (operation === null) {
        // add the function to the global and updated the input div
        operation = divide
        inputScreen.textContent += ` ${input} ` 
      } else {
        clear()
      }
      break;
    case 'AC':
      // clear the screen and global vars if they press this button
      clear()
      break;
    case 'DEL':
      // remove the last character from the input screen
      inputScreen.textContent = removeLastCharFromString(inputScreen.textContent);
      // check which global var to remove the last string from
      if (operation === null) 
        num1 = removeLastCharFromString(num1);
      else 
        num2 = removeLastCharFromString(num2);
      break;
    case '=':
      // calculate what the user wants
      // update the output div
      let result = performOperation(num1, num2, operation)
      outputScreen.textContent = result
      break;
    default:
      // this first statement handles the situation where if the a user has calculated something already
      // and goes to start another calculation, then clear everything for them 
      if (outputScreen.textContent.length > 0) clear()
      inputScreen.textContent += input 
      // determines which var to put the string into
      if (operation === null) 
        num1 += input
      else 
        num2 += input
      break;
  }
}

// these functions are fairly obvious
function sum(a, b) {
  return a + b
}
function minus(a, b) {
  return a - b
}
function multiply(a, b) {
  return a * b
}
function divide(a, b) {
  return a / b
}

function performOperation(num1, num2, operation) {
  // first block deals with handling the '=' press if there was no operation set yet, it will just show the first number in the output screen
  // otherwise it will do the calculation
  // ensuring that the number in a string is converted to a number first
  // if no number is given in either var, then it counts as a 0 which was not by intention but I think is appropriate
  if (operation === null)
    return Number(num1)
  else
    return operation(Number(num1),Number(num2))
}
function clear() {
  // clear everything
  outputScreen.textContent = ""
  inputScreen.textContent = ""
  num1 = ""
  num2 = ""
  operation = null
}
function removeLastCharFromString(str) {
  // remove the last char from a string
  return str.substring(0, str.length - 1);
}


module.exports = {
  multiply,
  sum,
  minus,
  divide,
  performOperation,
  clear,
  handleButtonClick,
}