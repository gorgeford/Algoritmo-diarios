//05- Return last n array elements


// Escribe una función que tome una matriz (a) y un número (n) como argumentos
// Debería devolver los últimos elementos de n

const array = (a, n) => a.splice(-n);

console.log(array([1,2,3,4,5,6],2));


