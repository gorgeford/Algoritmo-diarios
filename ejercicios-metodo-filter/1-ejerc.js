//hacer una funcion que reciba un array de numeros y retorne un array con todos los numeros impares 


let numbers = [1,2,3,4,5,6,7,8,9,10];

const oddNumbers = () => {
    
      return numbers.filter(number => number % 2 !== 0);
      
}

console.log(oddNumbers(numbers));