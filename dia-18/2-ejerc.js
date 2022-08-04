//10- Sum object values

// Escribir una función que tome un objeto (a) como argumento
// Devuelve la suma de todos los valores de los objetos


const SumObject = (a) => {
    let sum = 0;
    for(let key in a){
        sum += a [key] ;
    }
    return sum;
}

console.log(SumObject({j:10,i:20,x:30,z:40}));

