export{}

function reverseString(str:string):string{
    let newStr = str.split("");
    let arr = [];
    for(let i=str.length; i >= 0; i--){
        arr.push(newStr[i]);
    }
    return arr.join("");
}

console.log(reverseString("Hola"));