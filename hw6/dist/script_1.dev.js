"use strict";

//Завдання 1
var upperCaseString = function upperCaseString(userString) {
  var firstSymbolString = userString[0].toUpperCase();
  var symbolsString = userString.slice(1).toLowerCase();
  return firstSymbolString + symbolsString;
};

var userRegistrationName = function userRegistrationName() {
  var userName;

  do {
    userName = prompt("Введіть ваше ім'я:");

    if (!userName) {
      alert("Введіть хоча б один рядковий символ");
    } else {
      break;
    }
  } while (true);

  var upperCaseName = upperCaseString(userName);
  return upperCaseName;
};

var userRegistrationLastName = function userRegistrationLastName() {
  var userLastName;

  do {
    userLastName = prompt("Введіть ваше прізвище:");

    if (!userLastName) {
      alert("Введіть хочаб один рядковий символ");
    } else {
      break;
    }
  } while (true);

  var upperCaseLastName = upperCaseString(userLastName);
  return upperCaseLastName;
};

var userRegistrationPassword = function userRegistrationPassword() {
  var userPassword;

  do {
    userPassword = prompt("Придумайте пароль(не менше, ніж 6 символів та в різному регістрі):");

    if (!userPassword || userPassword.length < 6) {
      alert("Введіть не менше 6 символів");
    } else if (!isNaN(userPassword) || userPassword.toLowerCase() === userPassword || userPassword.toUpperCase() === userPassword) {
      alert("Не коректний пароль!");
    } else {
      alert("Регістрація пройшла успішно!");
      break;
    }
  } while (true);

  return userPassword;
};

var resName = userRegistrationName();
var resLastName = userRegistrationLastName();
var resPassword = userRegistrationPassword();
alert("\u0412\u0438 \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u043E\u0432\u0430\u043D\u0456 \u043F\u0456\u0434 \u0456\u043C'\u044F\u043C: ".concat(resName, " ").concat(resLastName, "\n\u0412\u0430\u0448 \u043F\u0430\u0440\u043E\u043B\u044C: ").concat(resPassword));