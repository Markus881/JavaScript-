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

// function test (a, b){
//     var x;
  
    
//     for ( i=a; i>0; i--){
//       console.log( ` i=`, i );
//       if ( a%i === 0 && b%i === 0){
//         x = i;
//         break;
//       }
      
//     };
  
  
  
//     return x;
//   };
  
//   console.log( ` x= `,  test (10, 99));


// -----------------------------------------------------------------------------------------------



const isNegative = (number) => number < 0;
const increment = (number) => number + 1;
const logger = (element, index, array) => {
  console.log(`In array [${array}] on position ${index}: ${element}`);
};

const ownForEach = (arr,logger) => {

    for(let num of arr){
        logger(num, arr.indexOf(num), arr)
    }

}

ownForEach([1, 2, 3], logger);

// let arr = [1, 2, 3]
// let test1 = arr.forEach((num) => logger(num, arr.indexOf(num), arr))
// console.log(test1)

// =====================================================================

const ownMap = (arr ,increment) => {

    let arrClone = []

    for(let num of arr){
        arrClone.push(increment(num))
    }

    return arrClone
}

// let resOwnMap = ownMap([1, 2, 3], increment)
// console.log(resOwnMap)

// let arr2 = [1, 2, 3]
// let test2 = arr2.map((num) => increment(num))
// console.log(test2)

// ownMap([1, 2, 3], increment);

// ===================================================================

const ownFilter = (arr, isNegative) => {

    let arrClone = []

    for(let num of arr){

        if(isNegative(num) === true){
            arrClone.push(num)
        }
    }
    return arrClone
}

// let resOwnFilter = ownFilter([-2, 4, -1], isNegative);
// console.log(resOwnFilter)

// let arr3 = [-2, 4 -1]
// let test3 = arr3.filter((num) => isNegative(num))
// console.log(test3)

// ownFilter([-2, 4, -1], isNegative);