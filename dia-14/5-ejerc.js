//17- Merge two arrays with duplicate values

// Escribe una función que tome dos arreglos como argumentos
// Combinar ambas matrices y eliminar valores duplicados
// Ordenar el resultado de la combinación en orden ascendente
// Devuelve la matriz resultante


const margeSortArray = (a, b) => {

    const concatArr = [...a, ...b];
    const arr = [...new Set(concatArr)];
    return arr.sort((a, b) => a - b);

}

console.log(margeSortArray([2,3,4,5],[3,5,7,8]));


