//2- Accessing object properties two

// Escribir una función que tome un objeto con dos propiedades como argumento
// Debería devolver el valor de la propiedad con clave 'prop-2'
// Sugerencia: es posible que desee utilizar el acceso a la propiedad de corchetes

const objectProperty = (obj) => {

    return obj['prop-2'];

}

console.log(objectProperty({  'prop-2': 'two',  prop: 'test'}));

