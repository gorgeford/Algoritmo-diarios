//Insert character after every n characters (backwards)//

// Escribe una función que tome dos cadenas (a y b) como argumentos
// Comenzando al final de 'a', inserte 'b' después de cada tercer carácter de 'a'
// Devuelve la cadena resultante


const strings = (a, b) => {

    let arr = a.split('')
     for (let i = arr.length - 3; i > 0; i -= 3) {
       arr.splice(i, 0, b);
     }

     return arr.join('');
}

console.log(strings('1234567','.' ));














