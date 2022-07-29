//13- Return the longest string from an array of strings

// Escribir una función que tome una matriz de cadenas como argumento
// Devuelve la cadena más larga


const array = (arr) => {

    return arr.reduce((acc, val) => acc.length > val.length ? acc : val, '');
}

console.log(array(['I', 'Need', 'Candy']));
