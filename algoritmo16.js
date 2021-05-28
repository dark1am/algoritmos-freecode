function chunkArrayInGroups(arr, size) {
  let temp = [];
  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (temp.length == size) {
      newArray.push(temp);
      temp = [];
      temp.push(arr[i]);
    } else if (i < arr.length - size) {
      temp.push(arr[i]);
    } else {
      temp.push(arr[i]);
    }
  }
  if (temp.length != 0) {
    newArray.push(temp);
  }
  return newArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
