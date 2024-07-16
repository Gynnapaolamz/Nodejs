const name = 'max';
let age = 29;
const hobbies = true;
//aqui se elimina la palabra function y luego agregamos => despues de los argumentos
const summarizerUser = (userName, userAge, userHasHobby) => {
    this
    return ( 'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby);
};
//aqui tenemos la misma sintaxis que con las llaves 
const add = (a, b) => a + b;

//cuando tenemos un solo argumento puede tener el nombre del mismo sin ()
const addOne = a => a + 4;

//funciones aerodinamicas los () no pueden tener espacio
const addRandom =() => 5 + 10;

console.log(addRandom());

console.log(addOne(5));

console.log(add(1, 2));

console.log(summarizerUser(name, age, hobbies));

//llamamos a la constante que tiene una funcion como valor 