//08- Count number of negative values in array

// Escribir una función que tome una matriz de números como argumento
// Devuelve el número de valores negativos en la matriz

const numbers = (a) => a.filter(value => value < 0).length;

console.log(numbers([1,3,-4,5,-4,-4,]));

