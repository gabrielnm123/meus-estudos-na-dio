// STRING

let nome = 'João';
let sobrenome = 'Pedro';
let concatenado = nome.concat(sobrenome); // concatena
console.log(concatenado);
let exemplo = new String ('blablabla'); // isso é um object, mas não precisa pq da pra usar todas funções sem deifnir como object
console.log(exemplo);
concatenado = nome + ' ' + sobrenome;
console.log(concatenado);
concatenado = nome + '\n\n' + sobrenome;
console.log(concatenado);
concatenado = `${nome} ${sobrenome}`;
console.log(concatenado);
concatenado = `${nome} 

${sobrenome}`;
console.log(concatenado);
console.log('\''); // imprimir ' escapando
let hello = 'ola mundo!';
let helloArray = hello.split(' '); // separar pra um array a string por espaço, nesse caso
console.log(helloArray);
console.log(hello.includes('mundo')); // procura a string passada como parametro voltando true se achar
console.log(hello.startsWith('o')); // começa com o valor passado como parametro se sim retorna true
console.log(hello.endsWith('mundo!')); // termina com o valor passado como parametro se sim retorna true
console.log(hello.replace('!', '?')); // muda o ' ' por ', '

// NUMBER

console.log(typeof(Math)); // é um object
let fiveByThree = 5 / 3;
console.log(fiveByThree);
console.log(Math.floor(fiveByThree)); // arrendonda pra baixo
console.log(Math.ceil(fiveByThree)); // arrendonda pra cima

