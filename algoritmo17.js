function sumAll(arr) {
  let smaller;
  let bigger;
  let acumulative = 0;

  if (arr[0] > arr[1]) {
    bigger = arr[0];
    smaller = arr[1];
  } else {
    bigger = arr[1];
    smaller = arr[0];
  }

  for (let i = 0; i < bigger; i++) {
    acumulative = acumulative + smaller;
    smaller++;
    if (smaller > bigger) {
      break;
    }
  }
  return acumulative;
}

sumAll([1, 4]);
