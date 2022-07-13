// Escribe una función que tome 6 valores (a,b,c,d,e,f) como argumentos
// Suma a y b
// Luego restamos por c
// Luego multiplica por d y divide por e
// Finalmente elevamos a la potencia de f y devolvemos el resultado
// Consejo: cuidado con el orden

const values = (a,b,c,d,e,f) => {

    let sum = a + b;
    let rest = sum - c;
    let multiply = rest * d;
    let divide = multiply / e;

      return Math.pow(divide,f);
}

console.log(values(6,5,4,3,2,1));