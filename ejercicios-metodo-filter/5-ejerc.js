
//Hacer una funcion que que reciba un array de object como argumento , En esta ocasión queremos obtener la lista de estudiantes aprobados (en Perú se aprueba con nota 11) , devolver la lista de estudintes aprobados.
//lista de students [{name: 'Alvaro',score: 10,},{name: 'Daniel',score: 16,},{name: 'Alexys',score: 12,},{name: 'Rafa',score: 17,},{name: 'Alejandro',score: 8,},{name: 'Sofia',score: 9,}]
  

const arrayObject = (arr) => {

	return arr.filter((item) => item.score >= 11);
}

console.log(arrayObject([{name: 'Alvaro',score: 10,},{name: 'Daniel',score: 16,},{name: 'Alexys',score: 12,},{name: 'Rafa',score: 17,},{name: 'Alejandro',score: 8,},{name: 'Sofia',score: 9,}]));
