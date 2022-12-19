// Example 1

let getAmountTrue = (arr) => {

    let countTrue = 0;

    for ( let item of arr) {

        if (item === true) 

        countTrue += 1;

    };

    return countTrue;

};

const res = getAmountTrue([false, true, false, false]);

console.log(res);

// Example 2

// const countTrue = (value) => {
//     const res = [];
//     for (let item of value){
//         if (item){
//             res.push(item)
//         }
//     }
//     return res.length
// };
// const finalResult = countTrue([true, false, false, true, true]);
// console.log ('Кількість значень true в масиві;', finalResult);