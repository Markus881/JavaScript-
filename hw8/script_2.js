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