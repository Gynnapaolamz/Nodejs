const person = {
    name: 'Max',
    age: 40,
    greet() {
        console.log('Hi I am ' + this.name);//con el this. puedo utilizar el name
    }
};

const printName = ({name}) => {
    console.log(name);
};

printName(person);

const { name, age } = person;
console.log(name, age);

const hobbies = [ 'sports' , 'cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1,hobby2);