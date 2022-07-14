// Escribe una función que tome dos cadenas (a y b) como argumentos
// Devuelve el numero de veces que a ocurre en b


const strings = (a,b) => {

    return b.split(a).length -1;

}

console.log(strings('e', 'el mani mantiene el sabor'));