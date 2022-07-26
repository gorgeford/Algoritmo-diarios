//06- Remove a specific array element

// Escribir una función que tome una matriz (a) y un valor (b) como argumento
// La función debe eliminar todos los elementos iguales a 'b' de la matriz
// Devuelve la matriz filtrada


const array = (a, b) => a.filter(x => x !== b);

console.log(array([1,2,3,3,4,5,3,6], 3));



