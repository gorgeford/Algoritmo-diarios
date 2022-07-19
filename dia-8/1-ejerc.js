//Find next higher natural number that is divisble by y//

// Escribe una función que tome dos números, digamos x e y, como argumentos
// Comprobar si x es divisible por y
// Si es así, devuelve x
// Si no, devuelve el siguiente número natural más alto que sea divisible por y


const numbers = (x,y) => {

    return Math.floor((x + y -1)/y) * y; 
}

console.log(numbers(19, 9));















