// Una funcion que determine si un string(de letras y numeros solamente)
// es palindromo.

function palindrome(str) {
  let newStr = str;
  let regEx = /[A-Za-z0-9]/gi;
  let filter = newStr.match(regEx).join("");
  let inverted = filter.split("").reverse().join("");

  console.log(filter, inverted);

  if (filter.toLowerCase() == inverted.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

palindrome("A man, a plan, a canal. Panama");
