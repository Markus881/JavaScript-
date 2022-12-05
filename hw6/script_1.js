//Завдання 1


const upperCaseString = (userString) => {

    const firstSymbolString = (userString[0]).toUpperCase();
    const symbolsString = (userString.slice(1)).toLowerCase();

    return firstSymbolString + symbolsString;
}

const userRegistrationName = () => {

    let userName

    do{
        userName = prompt("Введіть ваше ім'я:");

            if(!userName){
                alert("Введіть хоча б один рядковий символ")
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
            alert("Введіть хочаб один рядковий символ")
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
            alert("Введіть не менше 6 символів")
        }else if(!isNaN(userPassword) || userPassword.toLowerCase() === userPassword || (userPassword.toUpperCase() === userPassword)){
            alert("Не коректний пароль!")
        }else{
            alert("Регістрація пройшла успішно!")
            break
        }

    }while(true)
    
    return userPassword;
}

const resName = userRegistrationName();
const resLastName = userRegistrationLastName();
const resPassword = userRegistrationPassword();

alert(`Ви зареєстровані під ім'ям: ${resName} ${resLastName}
Ваш пароль: ${resPassword}`);