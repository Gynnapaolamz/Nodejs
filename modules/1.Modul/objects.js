const person = {
    name: 'Max',
    age: 40,
    greet() {
        console.log('Hi I am ' + this.name);//con el this. puedo utilizar el name
    }
};

//ahora puedo llamar a person junto con greet usando el .
person.greet();

