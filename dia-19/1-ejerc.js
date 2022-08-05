//13-Multiply all object values by x

// Escribe una función que tome un objeto (a) y un número (b) como argumentos
// Multiplica todos los valores de 'a' por 'b'
// Devuelve el objeto resultante



const MultiplyObject = (a , b) => {

const result = Object.fromEntries(
  Object.entries(a)
  .map(([ key, val ]) => [ key, val * b])
);

return result
}
console.log(MultiplyObject({a:1 , b:2, c:3},5));
