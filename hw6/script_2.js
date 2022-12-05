//Завдання 2

// Variant 1
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  alert(getRndInteger(0, 10))

//   Variant 2
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
  alert(getRndInteger(50, 100))