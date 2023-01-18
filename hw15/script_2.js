// Задание 2

    const user = {
        name: "gabriel",
        surname: "brown",
        age: 17,
        height: 178,
    };

    const {
        name,
        surname,
        ...parameters
    } = user;
    console.log( ` name`, name );
    console.log( ` surname`, surname );
    console.log( ` parameters`, parameters );