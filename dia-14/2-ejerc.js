
//14- Check if all array elements are equal

// Escribir una función que tome una matriz como argumento
// Debería devolver verdadero si todos los elementos de la matriz son iguales
// Debería devolver falso de lo contrario

const array = (arr) => {

    return arr.every(v => v === arr[0])? true : false;
}

console.log(array(['test', 'test', 'test']));

