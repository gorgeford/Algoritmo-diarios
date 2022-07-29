// 16- Sort array by object property

// Escribir una función que tome una matriz de objetos como argumento
// Ordenar la matriz por propiedad b en orden ascendente
// Devuelve la matriz ordenada


const sortArray = (arr) => {

    const sort = (x, y) => x.b - y.b;
    return arr.sort(sort);

}


console.log(sortArray([{a:1,b:10},{a:5,b:11}]));


