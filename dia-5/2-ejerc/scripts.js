//Escribe una función que tome un número (a) como argumento
// Si a es un número entero (no tiene lugar decimal), devuelve verdadero
// De lo contrario, devuelve falso

const Number = (a) => {

    if (a % 2 === 0){
        return true;
    }
        return false;
}

console.log(Number(8));