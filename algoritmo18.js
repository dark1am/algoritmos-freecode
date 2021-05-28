//Devuelve un arr con cualquier elemento que no se repita entre ellos dos.

function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter((elem) => !arr1.includes(elem) || !arr2.includes(elem));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
