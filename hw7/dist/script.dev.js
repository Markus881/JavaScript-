"use strict";

// Завдання 1
function getUserSchedule() {
  var userSchedule = {};
  var key;
  var value;

  do {
    key = prompt("На какое время записать задачу?");
    value = prompt("Какую задачу записать?");

    if (key === null || value === null) {
      break;
    }

    userSchedule[key] = value;
  } while (key !== null || value !== null);

  return userSchedule;
}

;
alert(getUserSchedule());