// Задание 5

//1

const str1 = "x1y 722a 333 a123v1n a55555a qwe1 1zxc";
const regexp1 = /\w\d+\w/gi;

console.log(`matches in regexp1`, str1.match(regexp1));

//2

const regexp2 = /([\w._-]+).([\w]{2,})/gi;

console.log(`test regexp2`, regexp2.test("ex.ua, google.com, yandex.ru, site.com.ua, my-page.com"));

//3

regexp3 = /\d{12,}$/gi;

console.log(`test regexp3`, regexp3.test("123456789101")); 
console.log(`test regexp3`, regexp3.test("123456789101s")); 