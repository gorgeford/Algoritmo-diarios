//14-Swap object keys and values


// Escribir una función que tome un objeto como argumento
// De alguna manera, las propiedades y claves del objeto se mezclaron
// Intercambiar la clave del objeto Javascript con sus valores y devolver el objeto resultante


const SwapKeyObject = (obj) =>{
    
   return Object.fromEntries(Object.entries(obj).map(a => a.reverse()));

}

console.log(SwapKeyObject({z:'a',y:'b',x:'c',w:'d'}));

