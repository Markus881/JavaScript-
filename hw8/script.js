let getAmountTrue = (arr) => {
    let countTrue = 0;
    for ( let item of arr) {
        if (item === true) 
            countTrue += 1;
    };
    return countTrue;
};

const res = getAmountTrue([false, false, false, false]);
console.log(res);