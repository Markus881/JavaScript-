// Задание 4 

// const createMessage = (author, text, reciever, time) => {
//   return `From ${author} to ${reciever}: ${text} (${time.toLocaleDateString()})`;
// };
// const message = createMessage("Peter", "Hello", "Sam", new Date());
// console.log( `message `,  message);
// после выполнения этого задания, функция должна коректно работать с таким аргументом
// const message = createMessage({
//   reciever: "John",
//   text: "Hi!",
// });

const createMessage = ( comment ) => {
    const { author="Guest", text, reciever, time = new Date()} = comment;
    return `From ${author} to ${reciever}: ${text} (${time.toLocaleDateString()})`;
};

const message = createMessage({
    reciever: "John",
    text: "Hi!",
  });
console.log( `message `,  message);