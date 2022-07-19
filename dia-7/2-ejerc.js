//Return the next higher prime number//

// Este desafío es un poco más complejo
// Escribir una función que tome un número (a) como argumento
// Si a es primo, devuelve a
// Si no, devuelve el siguiente número primo más alto


const number = (a) => {

    for(let i = 2; i < a; i++){
        if(a % i === 0){
            return number(a + 1);
        }
    } 
            return a;
}

console.log(number(38));

















