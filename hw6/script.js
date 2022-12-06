//Завдання 1
const authorization =() =>{
    const getUserName=()=>{
        let isGetUserName = false;
        let userName;
        while(!isGetUserName)
        {
            userName = prompt('Введіть ваше ім`я:');           
            if ( !userName  || userName.length === 0 ) {
                    alert('Введіть ваше ім`я:')
                    continue;
                } else {
                    isGetUserName = true
                }    
            }
         userName = userName[0].toUpperCase() + userName.slice(1).toLowerCase();
        return userName;
    }
    const resultUserName = getUserName();    
    const getUserLastName=()=>{
        let isGetUserLastrName = false;
        let userLastName;
        while(!isGetUserLastrName)
        {
            userLastName = prompt('Введіть Ваше прізвище:');           
            if ( !userLastName || userLastName.length === 0 ) {
                alert('Введіть Ваше прізвище:')
                continue;
            } else {
                isGetUserLastrName = true
            }    
        }
        userLastName = userLastName[0].toUpperCase() + userLastName.slice(1).toLowerCase();
        return userLastName;
    }
    const resultUserLastName = getUserLastName();
    const getUserPassword=()=>{
        let isGetUserPassword = false;
        let userPassword;
        while(!isGetUserPassword)
        {
            userPassword = prompt('Введіть Ваш пароль:');           
            if ( !userPassword || userPassword.length < 6 ) {
                alert('Введіть Ваш пароль! \nВалідний пароль - це будь-який рядок довше ніж 6 символів і містить символи різного регістру.')
                continue;
            } else {
                isGetUserPassword = true
            }    
        }          
        return userPassword;
    }
    const resultUserPassword =  getUserPassword();
    const checkPassword=(userPassword)=>{
        let number=0;
        let bigLetter=0;
        let smallLetter=0;
        console.log('userPassword', userPassword);
        for (let i=0; i<=userPassword.length-1; i++){
            const simvolPassword = userPassword[i];
            if (!isNaN(simvolPassword)) {number++; 
            } else{
                if (simvolPassword === simvolPassword.toUpperCase()) {bigLetter++; } else {smallLetter++}
            }
        }
        if (bigLetter === 0 || smallLetter === 0 || number === 0) {alert('Пароль не валідний')} else{alert('Добро пожаловать!')}
    }    
    checkPassword(resultUserPassword);
    alert(`Вітаємо! Ви успішно авторизувались! \nВаше ім'я: ${resultUserName} \nВаше прізвище: ${resultUserLastName} \nВаш пароль: ${resultUserPassword}`);
}
authorization();