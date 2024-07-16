

var persona = { nombre : 'Max' }    
var nuevaPersona = persona
nuevaPersona.nombre = ' Anna '  
console . log ( persona . nombre ) 

var hobbies = [ 'Deportes' , 'Cocina' ]  
var copiedHobbies = hobbies
copiedHobbies.push ( 'Música' )
console.log ( hobbies [ 1 ] ) 

var hobbies = ['Sports', 'Cooking']
var copiedHobbies = hobbies.slice()

//Aquí también creas una nueva matriz (manualmente, usando []) y luego usas el operador de propagación ( ...) para "extraer todos los elementos de la matriz anterior" y agregarlos a la nueva matriz.
var hobbies = ['Sports', 'Cooking']
var copiedHobbies = [...hobbies]