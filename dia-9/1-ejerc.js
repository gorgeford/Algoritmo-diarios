//Find the correct word by incrementing letters in alphabet//

// Escribir una función que tome una cadena como argumento
// Tal como está, la cadena no tiene significado
// Incrementar cada letra a la siguiente letra del alfabeto
// Devuelve la palabra correcta


const string = (str) => {

    let increme = '';
    for(let i = 0; i < str.length ; i++) {
        increme +=String.fromCharCode(str[i].charCodeAt(0) + 1); 
    }
    return increme;
}

console.log(string('bnchmf'));


'bnchmf'











