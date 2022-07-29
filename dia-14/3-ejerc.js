//15- Merge an arbitrary number of arrays

// Escribir una función que tome argumentos en un número arbitrario de arreglos
// Debería devolver una matriz que contenga los valores de todas las matrices

const valueArr = (...array) => {

    return array.reduce((acc, val) => acc.concat(val), []);

}

console.log(number([0,1,2],[3,4,5],[6,7]));
