//Завдання 1


const upperCaseString = (userString) => {
    const firstSymbolString = (userString[0]).toUpperCase();
    const symbolsString = (userString.slice(1)).toLowerCase();
    return firstSymbolString = symbolsString;
}

const userRegistrationName = () => {
    let userName
    do{
        userName = prompt("Введіть ваше ім'я:");
            if(!userName){
                console.log("Введіть хочаб один рядковий символ")
            }else{
                break
            }
    }while(true);
    const upperCaseName = upperCaseString(userName)
    return upperCaseName
};

const userRegistrationLastName = () => {
    let userLastName
    do{
        userLastName = prompt("Введіть ваше прізвище:");
        if(!userLastName){
            console.log("Введіть хочаб один рядковий символ")
        }else{
            break
        }
    }while(true);
    const upperCaseLastName = upperCaseString(userLastName)
    return upperCaseLastName
}

const userRegistrationPassword = () => {
    let userPassword
    do{
        userPassword = prompt("Придумайте пароль(не менше, ніж 6 символів та в різному регістрі):");
        if(!userPassword || userPassword.length < 6){
            console.log("Введіть не менше 6 символів")
        }else if(!isNaN(userPassword) || userPassword.toLowerCase() === userPassword || (userPassword.toUpperCase() === userPassword)){
            console.log("Не коректний пароль!")
        }else{
            console.log("Регістрація пройшла успішно!")
            break
        }
    }while(true)
    return userPassword;
}

const resName = userRegistrationName();
const resLastName = userRegistrationLastName();
const resPassword = userRegistrationPassword();

console.log(`Ви зареєстровані під ім'ям: ${resName} ${resLastName}
Ваш пароль: ${resPassword}`);






//Завдання 2

//Variant 1
// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) ) + min;
//   }
//   console.log (getRndInteger(0, 10))

  //Variant 2
//   function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min) ) + min;
//   }
//   console.log(getRndInteger(50, 100))