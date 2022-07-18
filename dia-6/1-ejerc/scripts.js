// Escribir una función que tome un número (a) como argumento
// Redondea a al segundo dígito después de la coma
// Devuelve el número redondeado

const numbers =(a) => {

   const num = Number((Math.abs(a) * 100).toPrecision(15));
    
        return Math.round(num) / 100 * Math.sign(a);

    }

    console.log(numbers(26.18579));












    //return Number(a.toFixed(2));  