//11-Calculate the sum of an array of numbers


// Escribir una función que tome una matriz de números como argumento
// Debería devolver la suma de los números

const array = (a) => {

    return a.reduce((a, b) => a + b, 0);

}

console.log(array([10,40,50,100]));