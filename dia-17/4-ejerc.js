//8- Creating Javascript objects three

// Escribe una función que tome dos arreglos (a y b) como argumentos
// Crear un objeto que tenga propiedades con claves 'a' y valores correspondientes 'b'
// Devolver el objeto

const CreateObject = (a, b) => {
     let obj = {};
     let index = 0;
     for(let i of a)
     {
        obj[i] = b[index]
        index++
     }
    return obj 
}

console.log(CreateObject(['a','b','c'],[1,2,3]));
