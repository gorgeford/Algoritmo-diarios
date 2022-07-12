// Escribir una función que tome una cadena (a) como argumento
// Eliminar los últimos 3 caracteres de un
// Devuelve el resultado


const string = (a) => {
    
    return a.slice(0,-3);

}

console.log(string('123456'))