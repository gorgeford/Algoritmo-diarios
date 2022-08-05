//Convert array to object with counter

// Escribir una función que tome una matriz de números como argumento
// Convierte la matriz en un objeto
// Debe tener una clave para cada valor único de la matriz
// El valor del objeto correspondiente debe ser el número de veces que aparece la clave dentro de la matriz

const ConvertObject = (arr) => {

    return arr.reduce((acc, curr) => (acc[curr] = (acc[curr] || 0) + 1, acc), {});

}

console.log(ConvertObject([1,2,2,3,4]));
  //{1:1,2:2,3:1}
