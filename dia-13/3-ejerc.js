//10- Sort an array of numbers in descending order

// Escribir una función que tome una matriz de números como argumento
// Debería devolver una matriz con los números ordenados en orden descendente

const numbers = (arr) => {

    return arr.sort((a, b) => b - a);
    
}

console.log(numbers([1,3,5,6,8,9]));

