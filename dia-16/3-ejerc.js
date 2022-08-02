//3- Accessing object properties three

// Escribir una función que tome un objeto con dos propiedades y una cadena como argumentos
// Debe devolver el valor de la propiedad con clave igual al valor de la cadena


const objectString = (obj, key) => {

    return obj[key];
}

console.log(objectString({  continent: 'Asia',  country: 'Japan'}, 'continent'));

