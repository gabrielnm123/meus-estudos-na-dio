var jogador1 = 0;
var jogador2 = 1;
var placar;

jogador1 >= 0 || jogador2 >= 0 ? console.log('jogadores válidos') : console.log('jogadores inválidos') // if ternário

if (jogador1 >= 0 || jogador2 >= 0) {
  if (jogador1 > 0 && jogador2 === 0) {
    console.log('jogador 1 marcou ponto');
    placar = jogador1 > jogador2;
  } else if (jogador2 > 0 && jogador1 === 0) {
    console.log('jogador 2 marcou ponto');
    placar = jogador2 > jogador1;
  } else {
    console.log('ninguem marcou pontos')
  }
}

// switch/case

switch (placar) {
  case placar = jogador1 > jogador2:
    console.log('jogador 1 ganhou');
    break
  case placar = jogador2 > jogador1:
    console.log('jogador 2 ganhou');
    break
  default:
    console.log('ninguem ganhou');
}

console.log();
// LOOPS

let array = [
  'valor1',
  'valor2',
  'valor3',
  'valor4',
  'valor5',
  'valor6'
];

let object = {
  propriedade1: 'valor1',
  propriedade2: 'valor2',
  propriedade3: 'valor3',
  propriedade4: 'valor4',
  propriedade5: 'valor5',
  propriedade6: 'valor6'
}

// for executa uma instrução atá que ela seja falsa

for (let indice = 0; indice < array.length; indice++) {
  console.log(indice) // a condição é verificada no final da execução
}

// for/in executa a repetição a partir de uma propriedade

console.log();
for (let i in array) { // i é o indice
  console.log(i); // é uma string
}
console.log();
for (let i in object) { // a propriedade do objeto funciona como seu indice
  console.log(i); // é uma string, imprime a propriedade
}
console.log();

// funciona como uma repetição a partir de um valor

for (v of array) { // em vez do indice é o valor
  console.log(v);
}
console.log();
/* O For/of não funciona com objetos pois as propriedades variam, 
diferentes do índice em um array que sempre serão números 
inteiros.
Mas e se eu quiser pegar o valor mesmo assim? */
for (v of object.propriedade1) {
console.log(v);
}
// porém cada caractere dentro do valor será
// Impresso em linhas separadas.

//while

console.log();
/* Executa uma instrução “enquanto” determinada condição for 
verdadeira, a verificação é feita antes da execução; */
var a = 0;
while (a < 10) {
a++;
console.log(a);
}

// do/while
// Executa uma instrução “até que” determinada condição seja falsa, 
// a verificação é feita depois da execução;
console.log();
var a = 0;
do {
a++;
console.log(a);
} while (a < 10)
