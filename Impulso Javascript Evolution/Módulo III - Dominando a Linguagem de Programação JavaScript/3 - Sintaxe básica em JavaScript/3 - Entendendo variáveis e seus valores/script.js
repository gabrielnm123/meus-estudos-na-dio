// Tipos primitivos

// Boolean
var vOuF = false; // atribuição
console.log(vOuF); // imprime o valor
console.log(typeof(vOuF)); // imprime o tipo

// Number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer)); // imprime o tipo

// String
var nome = 'nome';
console.log(typeof(nome)); // imprime o tipo

// Como declarar
var variavel; // tem o let que é usada no escopo local, por convenção, e const é constante
console.log(typeof(variavel)); // imprime o tipo, undefined

var escopoGlobal = 'global';
console.log(escopoGlobal)

// function escopoLocal() {
//   let escopoLocalInterno = 'local';
// }
// escopoLocal()
// console.log(escopoLocalInterno) // da erro, pois o variavel não existe, somente dentro da fução

function escopoLocal() {
  let escopoLocalInterno = 'local';
  console.log(escopoLocalInterno)
}
escopoLocal();

// Comparação
var comparacao = '0' == 0;
console.log(comparacao);

// Comparação identica
var comparacao = '0' === 0; // não compara so o valor, mas sim o tipo
console.log(comparacao);

//