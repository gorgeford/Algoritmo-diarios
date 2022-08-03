//5- Compruebe si la propiedad existe en el objeto y es veraz

// Escribir una función que tome un objeto (a) y una cadena (b) como argumento
// Devuelve verdadero si el objeto tiene una propiedad con la clave 'b', pero solo si tiene un valor verdadero
// En otras palabras, no debe ser nulo, indefinido o falso
// Devuelve falso en caso contrario


const objetString = (a, b) => {

    return a[b] ? true : false;

}

//console.log(objetString({a:1,b:2,c:3},'b')); //true
console.log(objetString({x:'a',b:'b',z:undefined},'z')); //false