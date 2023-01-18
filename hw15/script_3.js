// Задание 3

// const max = (a, b) => {
//   return a > b ? a : b;
// };

const max = ( ...num) => {
    return num.reduce( (a, b) => a > b ? a : b)
}
const res = max (2, 5, 15, 0, 7, 3);
console.log( ` res `, res );
