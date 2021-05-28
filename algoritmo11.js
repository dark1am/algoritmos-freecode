//Una funcion que devuelva un string pero que cada palabra inicie con una mayuscula.

function titleCase(str) {
  let arr = str.split(" ");
  let newArr = [];

  arr.forEach(function (element) {
    let memory = element[0].toUpperCase();
    let sub = element.substring(1).toLowerCase();
    let word = memory + sub;

    newArr.push(word);
    return newArr;
  });
  return newArr.join(" ");
}

titleCase("I'm a little tea pot");
