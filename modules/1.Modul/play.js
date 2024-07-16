const name = 'max';
let age = 29;
const hobbies = true;
//la parte de la derecha es una funcion anonima porque no le asignamos un nombre, pero implicitamente se nombra almacenando la funcionn anonima en la constante
const summarizerUser = function (userName, userAge, userHasHobby) {
    return ( 'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby);


};
console.log(summarizerUser(name, age, hobbies));

//llamamos a la constante que tiene una funcion como valor 