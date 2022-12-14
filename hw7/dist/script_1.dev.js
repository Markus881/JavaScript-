"use strict";

var salaries = {
  John: "4300.00",
  Ann: "5700.40",
  Pete: "4900.95"
};

var getSalariesTotal = function getSalariesTotal(salaries) {
  var total = 0;

  for (var employee in salaries) {
    console.log("employee", employee);
    console.log("salaries[employee]", salaries[employee]);
    total += salaries[employee] * 100;
  }

  return total / 100;
};

var totalResult = getSalariesTotal(salaries);
console.log("totalResult", totalResult);