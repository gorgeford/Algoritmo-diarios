//16- Multiplication, division, and comparison operators

// Escribe una función que tome dos números (a y b) como argumentos
// Si a es menor que b, dividimos a por b
// De lo contrario, multiplica ambos números
// Devuelve el valor resultante

const numbers = (a, b) => {

    if(a < b){
        return a / b;
    }
        return a * b;
}

console.log(numbers(1,2));





