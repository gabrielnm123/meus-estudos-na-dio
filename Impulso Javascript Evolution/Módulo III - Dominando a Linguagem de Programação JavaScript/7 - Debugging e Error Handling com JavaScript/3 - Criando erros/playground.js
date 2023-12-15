function validarArray(arr, num) {
  try {
    if (!arr && !num) throw new ReferenceError('Envie os parametros!');
    if (typeof arr !== 'object') throw new TypeError('Array precisa ser do tipo object');
    if (typeof num !== 'number') throw new TypeError('num precisa ser do tipo number');
    if (arr.length !== num) throw new RangeError('Tamanho invalido');
    return arr;
  } catch (e) {
    if (e instanceof ReferenceError) {
      console.log('Esse erro é um reference error')
      console.log(e.message)
    } else if (e instanceof TypeError) {
      console.log('Esse erro é um type error')
      console.log(e.message)
    } else if (e instanceof RangeError) {
      console.log('Esse erro é um renger error')
      console.log(e.message)
    } else {
      console.log('Esse erro é desconecido')
      console.log(e)
    }
  }
}

console.log(validarArray([1,2,3,4,5], 5));
