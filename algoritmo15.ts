// Una funcion que compare dos strings y que determine si el primero contiene
// las letras presentes en el segundo.
export{}

function mutation(arr: string[]):boolean {
    let box: string[] = arr[1].split("");
    let judgement: boolean;
  
    for (let i:number = 0; i < box.length; i++) {
  
      if (arr[0].toLowerCase().includes(box[i].toLowerCase())) {
        judgement = true;
      } else {
        judgement = false;
        break;
      }
    }
    return judgement;
  }
  
  const result:boolean = mutation(["hello", "helO"]);