const person = {
    name: 'Max',
    age: 40,
    greet() {
        console.log('Hi I am ' + this.name);//con el this. puedo utilizar el name
    }
};
//  los ... funciona igual si lo usamos en objetos usando {} 
const copiedPerson = {...person};
console.log(copiedPerson);

const hobbies = ['Sports', 'Cooking', 1];

//esta es una matriz anidada donde el primer elemento es otra matriz siendo esto el mismo objeto
// cuando agregamos ... (es un operador de propagacion, (tambien decia que de extraccion)) extrae todas las propiedades y elementos de la matriz en este caso hobbies y retira los [] adiciones de las matrices anidadas
const copiedArray = [...hobbies,];
//hobbies.push('programming');
console.log(copiedArray);


//operador de reposo (usado para fusionar multiples argumentos en una matrizy se usa en la lista de argumentos funcion)
const toArray = (...args) => {
    return args;
}

console.log(toArray(1, 2, 3, 4, 5));