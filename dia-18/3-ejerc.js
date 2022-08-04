//11- Remove a property from an object

// Escribir una función que tome un objeto como argumento
// Debería devolver un objeto con todas las propiedades del objeto original
// excepto por la propiedad con clave 'b'

const originalObject = (obj) =>{

    const {b, ...newObj} = obj;
    
    return newObj
}




console.log(originalObject({ a: 1, b: 7, c: 3 }));

