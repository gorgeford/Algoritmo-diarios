//Sum up all array elements with values greater than

// Escribe una función que tome una matriz (a) y un número (b) como argumentos
// Sumar todos los elementos de la matriz con un valor mayor que b
// Devuelve la suma

const sumArray = (a, b) => {

    const arr = a.filter((item) => item > b);
    return arr.reduce((a, b) => a + b, 0);

}

console.log(sumArray([78, 99, 100, 101, 401], 99))