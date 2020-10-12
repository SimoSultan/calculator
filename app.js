

let header = document.getElementById('header')
let inputScreen = document.getElementById('input-screen')
let outputScreen = document.getElementById('output-screen')
let buttons = document.getElementsByClassName('button')
for (let i = 0; i < buttons.length; i++) {
  const element = buttons[i];
  element.addEventListener('click', handleButtonClick)
}


var num1 = ""
var num2 = ""
var operation = null

function handleButtonClick() {
  let input = this.textContent
  switch (input) {
    case '+':
      if (operation === null) {
        operation = sum
        inputScreen.textContent += ` ${input} ` 
      } else {
        clear()
      }
      break;
    case '-':
      if (operation === null) {
        operation = minus
        inputScreen.textContent += ` ${input} ` 
      } else {
        clear()
      }
      break;
    case '×':
      if (operation === null) {
        operation = multiply
        inputScreen.textContent += ` ${input} ` 
      } else {
        clear()
      }
      break;
    case '÷':
      if (operation === null) {
        operation = divide
        inputScreen.textContent += ` ${input} ` 
      } else {
        clear()
      }
      break;
    case 'AC':
      clear()
      break;
    case 'DEL':
      inputScreen.textContent = removeLastCharFromString(inputScreen.textContent);
      if (operation === null) 
        num1 = removeLastCharFromString(num1);
      else 
        num2 = removeLastCharFromString(num2);
      break;
    case '=':
      let result = performOperation(num1, num2, operation)
      console.log();
      outputScreen.textContent = result
      break;
    default:
      if (outputScreen.textContent.length > 0) clear()
      inputScreen.textContent += input 
      if (operation === null) 
        num1 += input
      else 
        num2 += input
      break;
  }
}


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
  if (operation === null)
    return Number(num1)
  else
    return operation(Number(num1),Number(num2))
}
function clear() {
  outputScreen.textContent = ""
  inputScreen.textContent = ""
  num1 = ""
  num2 = ""
  operation = null
}
function removeLastCharFromString(str) {
  return str.substring(0, str.length - 1);
}
