// ARRAY OU VETORES

let array = ['string', 0, true, ['string1', 1, false]];

// forEach
array.forEach(function(item, index){console.log(item, index)}); // vai fazer uma repetição para cada indice ou item

// push
array.push('novo item no final'); // adiciona item no final
console.log(array);

// pop
array.pop(); // retira item do final
console.log(array);

// shift
array.shift(); // retira item do inicio
console.log(array);

// unshifit
array.unshift('novo item no inicio'); // adiciona item no inicio
console.log(array);

// indexOf
console.log(array.indexOf('novo item no inicio')); // mostra o indice de um item

// splice
array.splice(0, 3);
console.log(array); // remove ou substitui um item pelo índice, nesse caso remove os itens do indice 0 até o 2, o 3 pula

// slice
array.unshift('item 2');
array.unshift('item 1');
array.unshift('item 0');
let novoArray = array.slice(0, 3); // slice retornou os itens do indice 0 ate 2 e, nesse caso, atribui o valor ao novoArray
console.log(novoArray);

// OBJETOS

let object = {
  string: 'STRING', // STRING é uma propriedade e 'string' é o valor da propriedade do objeto
  number: 1,
  boolean: true,
  array: array,
  objectInterno: {objectInterno: 'objeto interno'}
};

console.log(object);
console.log(object.boolean); // printando o valor da propriedade
console.log(object.objectInterno);

var string = object.string; // desestruturação

console.log(typeof(string));

var {string, boolean, objectInterno} = object; // outra forma de desestruturação

console.log(string, boolean, objectInterno);
