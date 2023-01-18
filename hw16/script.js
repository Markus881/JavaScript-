// Homework 16

const container = document.getElementById("container");

const renderGreeting = () => {
    const greetingElement = document.createElement("p");
    greetingElement.innerText = "Добро пожаловать ";
    container.append(greetingElement);

    const visitsNum = document.createElement("p");
    const visits = JSON.parse(localStorage.getItem("visits"));
        if (!visits){
            localStorage.setItem("visits", 1);    
        } else {
            let n = visits + 1;
            localStorage.setItem("visits", n);
            visitsNum.innerText =`Вы заходили раз: ${n}`;
            container.append(visitsNum);
        }         
}
renderGreeting();


// з розбору:

// const container = document.getElementById("container");

// const renderGreeting = ( isInitial, visitsCount = 0) => {
//     const greetingElement = document.createElement("p");
//     const visitsCountElement = document.createElement("p");
//     greetingElement.innerText = "Добро пожаловать ";
//     visitsCountElement.innerText = `Вы заходили раз: ${visitsCount}`;

//     container.append(greetingElement);

//     if ( isInitial ) {
//         container.append(visitsCountElement);
//     }
// };

// if ( localStorage.getItem("visits")) {
//     const visits = JSON.parse(localStorage.getItem("visits"));
//     const updateVisits = visits + 1;
//     localStorage.setItem("visits", updateVisits);

//     renderGreeting( true, updateVisits);
// } else {
//     localStorage.getItem("visits", 1);
//     renderGreeting(false);
// }