//19-Create a range of numbers

// Escribe una función que tome dos números (mínimo y máximo) como argumentos
// Devuelve una matriz de números en el rango min a max


const rangeNumbersArray = (min, max) => {

    let arr = [];
    for (let i = min; i <= max; i++) {
             arr.push(i)
    }
     return arr 
}

console.log(rangeNumbersArray(5, 9));






