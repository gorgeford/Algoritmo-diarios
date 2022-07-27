//12- Return the average of an array of numbers

// Escribir una función que tome una matriz de números como argumento
// Debería devolver el promedio de los números 

const numbers = (arr) => {

    return arr.reduce((a, b) => a + b, 0) / arr.length
}
 
console.log(numbers([10,100,40]));

