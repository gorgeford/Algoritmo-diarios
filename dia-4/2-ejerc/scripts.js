// Escribir una función que tome un número como argumento
// Si el número es par, devuelve verdadero
// De lo contrario, devuelve falso

const number = (a) => {

    if(a % 2 === 0){
        return true;
    }
       return false;
}

console.log(number(13));