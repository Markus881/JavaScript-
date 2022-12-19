// Example 1


const getOccurrencesCount = (arr) => {

    let newObj = {};

    for (let item of arr) {

        if (!newObj[item]) {
            newObj[item] = 1;
        } else {
            newObj[item] += 1;
        };
        
    };

    return newObj;

};

// const res = getOccurrencesCount(["a", "v", "a", "b", "b"]);
const res = getOccurrencesCount([
      "apples",
      "oranges",
      "pears",
      "pears",
      "apples",
      "oranges",
      "oranges",
      "pears",
    ]);

console.log(res);









// Example 2

// const getOccurrencesCount = (items) => {
    
//     const occurrencesCount = {};
    
//     for (let elem of items){
        
//         if (!occurrencesCount[elem]){
//             occurrencesCount[elem] = 1
//         }else{
//             occurrencesCount[elem] += 1
//         }
        
//     }
//     return occurrencesCount
// };

// const showResult = getOccurrencesCount(["a","v","a","b","b","a"]);

// console.log('Кількість входжень: ', showResult);