// Una funcion que devuelva un array sin sus elementos falsy.

function bouncer(arr) {
  let result = arr.filter((elem) => Boolean(elem));
  return result;
}

bouncer([7, "ate", "", false, 9]);
