//4- Check if property exists in object

// Escribir una función que tome un objeto (a) y una cadena (b) como argumento
// Devuelve verdadero si el objeto tiene una propiedad con la clave 'b'
// Devuelve falso en caso contrario
// Consejo: el caso de prueba 3 es un poco complicado porque el valor de la propiedad 'z' no está definido
// Pero la propiedad en sí existe


const objectPropertyString = (a,b) => {

    if (b in a){
        return true;
    }
        return false;
}

//console.log(objectPropertyString({x:'a',y:'b',z:undefined},'z'));
console.log(objectPropertyString({x:'a',y:'b',z:'c'},'a'));



