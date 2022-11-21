// // //Завдання 1

// function comparison(a, b) {
//     return a == b;
// }
// let result = comparison(+prompt('Введіть перше число!', ''), +prompt('Введіть друге число!', ''));  
  
//   alert( result );

// //Завдання 2

function getSum(){
var num1 = Number(prompt('Введіть число!', ''));
var num2 = Number(prompt('Введіть число!', ''));
var getSum = num1 + num2;
alert(getSum);
}
getSum();
// ====
let sum = (a, b) => a + b;

alert( sum(1, 2) );

// Завдання 3

// function exponentiation () {
//     let num = Number(prompt('Введіть число!', ''));
//     alert (num**2);
// }
// exponentiation ();

// Завдання 4

// let Day = function (day) {
//     switch (day) {
//         case 1: return "Понеділок";
//         case 2: return "Вівторок";
//         case 3: return "Середа";
//         case 4: return "Четверг";
//         case 5: return "П'ятниця";
//         case 6: return "Субота";
//         case 7: return "Неділя";
//         default: return "Ви ввели некоректне число!"
//     }
// }
// document.write(Day(0));