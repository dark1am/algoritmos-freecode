//Ordena de menor a mayor el array y devuelve el indice de donde estaria el 'num' pasado
// por parametro.

function getIndexToIns(arr, num) {
  return arr.filter((val) => num > val).length;
}

getIndexToIns([40, 60], 50);
