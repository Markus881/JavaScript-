
function fun(arr) {
    let newArr = [];
    for (let e of arr) {
      let isSimple = true;
      if (e > 2 && e % 2 === 0) {
        isSimple = false
      } else {
        const end = Math.trunc(Math.sqrt(e))
        for (let j = 3; j <= end; j += 2) {
          if (e % j === 0) {
            isSimple = false;
            break;
          }
        }
      }
      newArr.push(isSimple);
    }
    return newArr;
  }
  console.log(fun([1, 2, -10, -2, 7])); // [ false , true , true , false , true ]




  