// Завдання 2
const salaries = {
      John: "4300.00",
      Ann: "5700.40",
      Pete: "4900.95",
    };

const getSalariesTotal = ( salaries ) => {
    let total = 0;
    for ( let employee in salaries) {
        console.log(`employee`, employee );
        console.log( `salaries[employee]`, salaries[employee]);
        total += salaries[employee] * 100;
    }
    return total / 100;
};

const totalResult = getSalariesTotal(salaries);
console.log(`totalResult`, totalResult);