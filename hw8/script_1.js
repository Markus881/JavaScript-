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