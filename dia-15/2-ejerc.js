//20- Group array of strings by first letter

// Escribir una función que tome una matriz de cadenas como argumento
// Agrupa esas cadenas por su primera letra
// Devuelve un objeto que contiene propiedades con claves que representan las primeras letras
// Los valores deben ser matrices de cadenas que contengan solo las cadenas correspondientes
// Por ejemplo, la matriz ['Alf', 'Alice', 'Ben'] debe transformarse en
// { a: ['Alfa', 'Alicia'], b: ['Ben']}

const GroupObjectArray = (arr) =>{

    let obj = {};
    arr.forEach(e => obj[e[0].toLowerCase()] = arr.filter(x => x[0] == e[0]));
    return obj;
}

console.log(GroupObjectArray(['Alfa', 'Alice', 'Ben']));


