//Завдання 1

const a = 5;
const b = 10;
const c = a + b;
c;

console.log('c');

//Завдання 2

true && true //true
false || true //true
true && 'false' //false
0 && 1 || ' ' && 42 //42
null == undefined  //true
'' == 0 // true
1 === '1' //false
NaN === NaN && true //false
true || false && true || false //true
(true || false) && (true || false) //true
10 || 0 && 'dog' || '' //10
(10 || 0) && ('dog' || '') //'dog'

var a = +prompt('Введіть перше число!', '');
var b = Number(prompt('Введіть друге число!', ''));
var c = a < b;
alert(c);

if (a < b) {
    rusult = true;
}