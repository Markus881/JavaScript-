// //Завдання 1

// // Цикл for

// for (let b = 0; b < 10; b++) {
//     alert(b);
//   }

// for (let b = 20; b > 10; b--) {
//     alert(b);
//   }

// // Цикл while

// let a = 10;
// while (a) { 
//   alert( a );
//   a--;
// }

// // Цикл “do…while”

// let c = 0;
// do {
//   alert( c );
//   c++;
// } while (c < 10);

//Завдання 2

let $n = 10;

nextPrime:
for (let $i = 2; $i <= $n; $i++) { 

  for (let j = 2; j < $i; j++) { 
    if ($i % j == 0) continue nextPrime; 
  }

  alert( $i ); 
}

// ============

let n = 100;

nextPrime:
for (let i = 21; i <= n; i++) { 

  for (let j = 21; j < i; j++) { 
    if (i % j == 0) continue nextPrime; 
  }

  alert( i ); 
}