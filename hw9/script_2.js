// data.filter(element => element.age === 19);
// console.log( ` data`, data  );



// ! 1 - предпочтительный вариант но очень маловерояный:

// function filterData(data, filterBy) {
//     return data.filter((item) => {
//         return Object.entries(filterBy)
//         .every(([key, value]) =>{
//             return item[key] === value;
//         });
//     });
// }
// console.log( `filterData(data, { age: 19, position: "junior" })  `, filterData(data, { age: 19, position: "junior" }) );

// ! 2- вариант

// function aaa (arr, filter) {
//     return arr.filter(item => 
//         Object.keys(filter).every(key => 
//             item[key] === filter[key]
//             )
//         );

// // ! 3 - даже так можно-----------------

//     const filterData (data, filterBy) => data.filter((item) => Object.entries(filterBy).every(([key, value]) => item[key] === value));

// // ! 4 -------------------------------
//         const filterData = (data, filterBy) => {
//               const filtered = [];
            
//               for (let i = 0; i < data.length; i++) {
//                 let isMatch = true;
//                 for (let key in filterBy) {
//                   if (data[i][key] !== filterBy[key]) {
//                     isMatch = false;
//                   }
//                 }
//                 if (isMatch) {
//                   filtered.push(data[i]);
//                 }
//               }
            
//               return filtered;
// };

// const filtered = filterData(data, { age: 19, position: "junior" }); 
// console.log(`filtered`, filtered);


// ----------------------------------------------------

const data = [
    {
      name: "John",
      age: 24,
      position: "senior",
      isActive: false,
    },
    {
      name: "Peter",
      age: 33,
      position: "middle",
      isActive: false,
    },
    {
      name: "Sam",
      age: 29,
      position: "junior",
      isActive: true,
    },
    {
      name: "Mary",
      age: 24,
      position: "middle",
      isActive: false,
    },
    {
      name: "Steve",
      age: 23,
      position: "middle",
      isActive: true,
    },
    {
      name: "Kate",
      age: 31,
      position: "middle",
      isActive: false,
    },
    {
      name: "Sally",
      age: 19,
      position: "junior",
      isActive: false,
    },
    {
      name: "Jack",
      age: 19,
      position: "middle",
      isActive: true,
    },
  ];
  
  // let res = (arr, prop) => {
  //   let arr2 = [];
  
  //   for ( let i = 0; i < arr.length; i++) { 
  //     if (arr[i].hasOwnProperty(prop)){
  //     console.log( ` arr[i]`, arr[i] );
  //     // arr2.push(arr[i]);
  //     return arr[i];
  //   }
  // }
  //   return arr2;
  // }
  // let filtered = res (data,  {age: 23 } )
  // console.log( ` filtered =`, filtered  );
  
  
  let res = (arr, prop) => {
    let arr2 = [];
  
    for (let i = 0; i < arr.length; i++) {
      for (const key in prop) {
        if (arr[i].hasOwnProperty(key) && arr[i][key] === prop[key]) {
          arr2.push(arr[i]);
        }
      }
    }
  
    return arr2;
  };
  
  console.log(res(data, { age: 19, position: "junior" }));
  
  
  let arr2 = [];
  
  // for (const item of arr) {
  //   // если ключ из обьекта массива совпадет с ключем переданного объекта,
  //   //  и функция every вернет правду, то тогда этот элемент будет запушен в arr2
  
  //   if (Object.keys(prop).every((key) => item[key] === prop[key])) {
  //     arr2.push(item);
  //   }
  // }
  
  // return arr2;
  // };