//Una funcion que devuelva un arreglo que tenga el contenido del primer arreglo cpm el contenido del
// segundo arreglo a partir de un indice 'n'.

function frankenSplice(arr1, arr2, n) {
  let localArr = [...arr2];

  localArr.splice(n, 0, ...arr1);

  return localArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
