// Task_1

// function fun(arr) {
//     let newArr = [];
//     for (let e of arr) {
//       let isSimple = true;
//       if (e > 2 && e % 2 === 0) {
//         isSimple = false
//       } else {
//         const end = Math.trunc(Math.sqrt(e))
//         for (let j = 3; j <= end; j += 2) {
//           if (e % j === 0) {
//             isSimple = false;
//             break;
//           }
//         }
//       }
//       newArr.push(isSimple);
//     }
//     return newArr;
//   }
//   console.log(fun([1, 2, -10, -2, 7])); // [ false , true , true , false , true ]


//   const toBoolian = (arr) => {
//     return arr.map((num) => {

//       if(num > 0){
//         return true
//       }else{
//         return false
//       }
//     })
//   }

//   // const toBoolian = (arr) => arr.map((num) => num >0)

// const res = toBoolian([1, 2, -10, -2, 7])
// // console.log (res)


// Task_2

const users = [
  {
    name: 'Sam',
    role: 'admin',
    age: 25,
  },
    {
    name: 'Peter',
    role: 'admin',
    age: 16,
  },
    {
    name: 'Pablo',
    role: 'admin',
    age: 32,
  },
    {
    name: 'Enrico',
    role: 'client',
    age: 43,
  },
    {
    name: 'Mary',
    role: 'client',
    age: 34,
  },
    {
    name: 'Katerine',
    role: 'guest',
    age: 17,
  },
]




const filterAdultAdmin = (dataArr) => {
  return dataArr
  .filter((user) => user.age >= 18 && user.role === 'admin')
  .map((user) => user.name)
}

const adultAdmins = filterAdultAdmin(users);
console.log(adultAdmins)



// Task_3

// const countAverage = (arr) => {
//   total
//   amount
//   index
//   array

//   return arr.reduce((total, amount, index, array) => {
//     total +=amount;
//     if( index === array.length-1) {
//       return total / array.length;
//     }else {
//       return total;
//     }
//   });
// }

// const averageResult = countAverage([1, 10, 17, 24, 45])
// console.log(averageResult)