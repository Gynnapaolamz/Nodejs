const person = {
    name: 'Max',
    age: 40,
    greet() {
        console.log('Hi I am ' + this.name);//con el this. puedo utilizar el name
    }
};

const hobbies = ['Sports', 'Cooking', 1];
console.log(hobbies.map(hobby => {
    return 'Hobby: ' + hobby;
}));
console.log(hobbies);