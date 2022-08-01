//22- Get every nth element of array

// Escribir una función que tome una matriz (a) y un valor (n) como argumentos
// Guardar cada n-ésimo elemento en una nueva matriz
// Devuelve la nueva matriz

const EveryNewArray = (a, n) => {

    return a.filter((e, i) => i % n === n -1);
}

console.log(EveryNewArray([1,2,3,4,5,6,7,8,9,10],3));