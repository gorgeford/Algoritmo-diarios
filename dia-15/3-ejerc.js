//21- Define an array with conditional elements

// Escribe una función que tome una matriz con elementos arbitrarios y un número como argumentos
// Devuelve una nueva matriz, el primer elemento debe ser el mismo número dado
// o cero si el número es menor que 6
// Los otros elementos deben ser los elementos de la matriz original
// Intenta no mutar la matriz original

const newArry = (arr, num) => {

    const firstElm = num >= 6 ? num : 0;
    const result = [];
       result.push(firstElm);
    for(let i =0; i < arr.length; i++) {
       result.push(arr[i]);
   }
    return result;
}

//console.log(newArry([1,2,3,4,5], 7))
console.log(newArry([null, false], 11));

