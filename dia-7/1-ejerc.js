// Clear up the chaos behind these strings//

// Parece que algo le pasó a estas cadenas
// ¿Puedes descubrir cómo aclarar el caos?
// Escriba una función que una estas cadenas de modo que formen las siguientes palabras:
// 'Javascript', 'Campo' y 'Centro'
// Es posible que desee aplicar métodos básicos de cadena JS como replace(), split(), slice(), etc.



const strings = (a,b) => {

    b = b.split('').reverse().join('');
    a = a.charAt(0).toUpperCase() + a.slice(1);
    result = a.concat(b).replace(/[^a-zA-Z]/g,'');

   return result;

}

console.log(strings( 'java', 'tpi%rcs=?' ));






