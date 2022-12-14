"use strict";

var result;
var operator = prompt('Enter operator ( either +, -, * or / ): ');
var number1 = parseFloat(prompt('Enter first number: '));
var number2 = parseFloat(prompt('Enter second number: '));

switch (operator) {
  case '+':
    result = number1 + number2;
    console.log("".concat(number1, " + ").concat(number2, " = ").concat(result));
    break;

  case '-':
    result = number1 - number2;
    console.log("".concat(number1, " - ").concat(number2, " = ").concat(result));
    break;

  case '*':
    result = number1 * number2;
    console.log("".concat(number1, " * ").concat(number2, " = ").concat(result));
    break;

  case '/':
    result = number1 / number2;
    console.log("".concat(number1, " / ").concat(number2, " = ").concat(result));
    break;

  default:
    console.log('Invalid operator');
    break;
}