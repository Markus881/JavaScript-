"use strict";

//   const ownForEach = (arr, callback) => {
//     for (let i = 0; i < arr.length; i++) {
//       callback(arr[i], i, arr);
//     }
//   };
// // -------------------------------------------
//   const ownMap = (arr, callback) => {
//     let resultArr = [];
//     for (let i = 0; i < arr.length; i++) {
//       const operationResult = callback(arr[i], i, arr);
//       resultArr.push(operationResult);
//     }
//     return resultArr;
//   };
// //   -----------------------------------------
//   const ownFilter = (arr, callback) => {
//     let resultArr = [];
//     for (let i = 0; i < arr.length; i++) {
//       const operationResult = callback(arr[i], i, arr);
//       if (operationResult) {
//         resultArr.push(arr[i]);
//       }
//     }
//     return resultArr;
//   };
function test(a, b) {
  var x;

  for (i = a; i > 0; i--) {
    console.log(" i=", i);

    if (a % i === 0 && b % i === 0) {
      x = i;
      break;
    }
  }

  ;
  return x;
}

;
console.log(" x= ", test(10, 99)); //   Footer
//   © 2022 GitHub, Inc.
//   Footer navigation
//   Terms
//   Privacy
//   Security
//   Status
//   Docs
//   Contact GitHub
//   Pricing
//   API
//   Training
//   Blog
//   About