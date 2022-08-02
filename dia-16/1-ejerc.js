// Ejercicios de objetos.
//1- Accediendo a las propiedades del objeto uno

// Escribir una función que tome un objeto con dos propiedades como argumento
// Debe devolver el valor de la propiedad con clave país

const objectCountry = (obj) => {

    return obj.country;
}    

console.log(objectCountry({ continent: 'Asia', country: 'Japan' }));

