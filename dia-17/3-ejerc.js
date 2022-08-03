//7- Creando objetos Javascript dos

// Escribe una función que tome dos cadenas (a y b) como argumentos
// Crear un objeto que tenga una propiedad con la clave 'a' y un valor de 'b'
// Devolver el objeto


const CreateObject = (a, b) => {

    return {[a]:b};
}

console.log(CreateObject('d', 'f'));
