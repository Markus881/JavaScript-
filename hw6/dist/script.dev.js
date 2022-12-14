"use strict";

//Завдання 1
var authorization = function authorization() {
  var getUserName = function getUserName() {
    var isGetUserName = false;
    var userName;

    while (!isGetUserName) {
      userName = prompt('Введіть ваше ім`я:');

      if (!userName || userName.length === 0) {
        alert('Введіть ваше ім`я:');
        continue;
      } else {
        isGetUserName = true;
      }
    }

    userName = userName[0].toUpperCase() + userName.slice(1).toLowerCase();
    return userName;
  };

  var resultUserName = getUserName();

  var getUserLastName = function getUserLastName() {
    var isGetUserLastrName = false;
    var userLastName;

    while (!isGetUserLastrName) {
      userLastName = prompt('Введіть Ваше прізвище:');

      if (!userLastName || userLastName.length === 0) {
        alert('Введіть Ваше прізвище:');
        continue;
      } else {
        isGetUserLastrName = true;
      }
    }

    userLastName = userLastName[0].toUpperCase() + userLastName.slice(1).toLowerCase();
    return userLastName;
  };

  var resultUserLastName = getUserLastName();

  var getUserPassword = function getUserPassword() {
    var isGetUserPassword = false;
    var userPassword;

    while (!isGetUserPassword) {
      userPassword = prompt('Введіть Ваш пароль:');

      if (!userPassword || userPassword.length < 6) {
        alert('Введіть Ваш пароль! \nВалідний пароль - це будь-який рядок довше ніж 6 символів і містить символи різного регістру.');
        continue;
      } else {
        isGetUserPassword = true;
      }
    }

    return userPassword;
  };

  var resultUserPassword = getUserPassword();

  var checkPassword = function checkPassword(userPassword) {
    var number = 0;
    var bigLetter = 0;
    var smallLetter = 0;
    console.log('userPassword', userPassword);

    for (var i = 0; i <= userPassword.length - 1; i++) {
      var simvolPassword = userPassword[i];

      if (!isNaN(simvolPassword)) {
        number++;
      } else {
        if (simvolPassword === simvolPassword.toUpperCase()) {
          bigLetter++;
        } else {
          smallLetter++;
        }
      }
    }

    if (bigLetter === 0 || smallLetter === 0 || number === 0) {
      alert('Пароль не валідний');
    } else {
      alert('Добро пожаловать!');
    }
  };

  checkPassword(resultUserPassword);
  alert("\u0412\u0456\u0442\u0430\u0454\u043C\u043E! \u0412\u0438 \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0443\u0432\u0430\u043B\u0438\u0441\u044C! \n\u0412\u0430\u0448\u0435 \u0456\u043C'\u044F: ".concat(resultUserName, " \n\u0412\u0430\u0448\u0435 \u043F\u0440\u0456\u0437\u0432\u0438\u0449\u0435: ").concat(resultUserLastName, " \n\u0412\u0430\u0448 \u043F\u0430\u0440\u043E\u043B\u044C: ").concat(resultUserPassword));
};

authorization();