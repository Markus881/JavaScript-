// Example 1

const findExcess = (arr) => {
    let evenNum = [];
    let oddNum = [];

    for (let num of arr) {
        if ( num % 2 === 0 ) {
            evenNum.push(num);
        } else {
            oddNum.push(num);
        };
    }; 
    
   let res = evenNum.length < oddNum.length ?  evenNum[0]: oddNum[0] ; 
       return res;  
};

const N = findExcess([1, 1, 0, 1, 1]);
console.log(`N = `, N);



// Example 2

// const findExcess = (integers) => {
//     let  evenArray = []
//     let oddArray = []
//     for (let num of integers){
//         num % 2 == 0 ? evenArray.push(num) : oddArray.push(num)

//         if (num % 2 == 0){
//             evenArray.push(num)
//         }else{
//             oddArray.push(num)
//         }
//     }

//     if (evenArray.length > oddArray.length){
//         return oddArray[0]
//     }else{
//         return evenArray[0]
//     }

// }

// const integers = findExcess([2, 6, 8, 10, 3])
// const integers2 = findExcess([1, 3, 5, 10, 7])
// console.log('Зайве число: ', integers)
// console.log('Зайве число: ', integers2)