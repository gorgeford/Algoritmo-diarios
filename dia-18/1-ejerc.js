//9-Extract keys from Javascript object

// Escribir una función que tome un objeto (a) como argumento
// Devolver una matriz con todas las claves de objeto


const ExtractKeyObject = (a) => {

    return Object.entries(a).map(item => item [0]);
}

console.log(ExtractKeyObject({a:1,b:2,c:3}));


