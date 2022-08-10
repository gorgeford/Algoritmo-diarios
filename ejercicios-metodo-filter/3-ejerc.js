//Hacer una funcion que reciba un array de numemero y retorne los numeros mayores que 11 este seria el array [1,5,23,4,12,45,78,8,8.9,10,11,3.4,10.1,84,6]


const greaterNumbers = (arr) => {

      return arr.filter(Number => Number > 11);
}

console.log(greaterNumbers([1,5,23,4,12,45,78,8,8.9,10,11,3.4,10.1,84,6]))
