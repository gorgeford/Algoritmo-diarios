//crear una funcion que reciba como argumento un array de string y deve devolver los elementos del array que contengan mas de 5 caracteres 


const arrayString = (arr) => {

      return arr.filter((item) => item.length > 5);
}

console.log(arrayString(['holamundo', 'jorgeDev', 'spartandev', 'dev', 'html' , 'css', 'JavaScript', 'josue', 'danny']));
