function substituirPares(array) {
  if (!array) return -1;
  if (!array.length) return -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      console.log('Você ja é zero!!');
    } else if(array[i] % 2 === 0) {
      console.log(`Substituindo ${array[i]} por zero...`);
      array[i] = 0;
    }
  }
  return array
}

let array = [0, 1, 2, 3, 5, 4, 10, 22, 45, 78, 3];
console.log(substituirPares(array));
console.log(substituirPares([]));
