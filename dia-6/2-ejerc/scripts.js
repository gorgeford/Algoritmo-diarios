// Escribir una función que tome un número (a) como argumento
// Dividir a en sus dígitos individuales y devolverlos en un array
// Consejo: es posible que desee cambiar el tipo de número para la división



const numbers = (a) => { 

    const string = a + '';
    const strings = string.split('');
    return strings.map(b => Number(b))

}

console.log(numbers(193278))






