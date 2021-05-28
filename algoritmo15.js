// Una funcion que compare dos strings y que determine si el primero contiene
// las letras presentes en el segundo.

function mutation(arr) {
  let box = arr[1].split("");
  let judgement;

  for (let i = 0; i < box.length; i++) {
    console.log(arr[0].includes(box[i])); // Debugging

    if (arr[0].toLowerCase().includes(box[i].toLowerCase())) {
      judgement = true;
    } else {
      judgement = false;
      break;
    }
  }
  return judgement;
}

mutation(["hello", "hey"]);
