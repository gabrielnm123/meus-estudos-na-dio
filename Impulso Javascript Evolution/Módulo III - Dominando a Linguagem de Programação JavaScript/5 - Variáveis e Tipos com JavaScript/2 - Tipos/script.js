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

// BOOLEAN

let validation = 3 === 3;
console.log(validation.toString(), typeof(validation.toString())); // metodo pra transformar em string
console.log(! validation);
console.log(! true);
console.log(! false);

// ARRAY

let array = [];
array.push(3); // adiciona ao final
array.push(2);
console.log(array);
array.pop(); // retira o final
console.log(array);
array.push(2);
array.push(5);
array.shift(); // retira do começo
array.unshift(1); // adiciona no inicio
console.log(array);

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

console.log(array.includes(3)); // 3 é um elemento do array
console.log(array.every(item => item === 5)); // todos os elementos são 5
console.log(array.some(item => item === 5)); // tem algum elemento 5
console.log(array.reverse()); // lista ao 

// OBJECT

let obj = {};
obj.name = 'Julia';
obj.age = 20;
console.log(Object.values(obj), typeof(Object.values(obj))); // object com os valores do object
console.log(Object.keys(obj),); // object com as chaves do object
let person = {
  name: 'Julia',
  age: '20'
}
console.log(person.name);
console.log(person['name']);
person['numberOfSiblings'] = 3;
console.log(person);

let mon = 'nameOfMon';
person[mon] = 'Maria' // dessa forma passo o valor da variavel como chave, se fosse usando o . a chave teria o nome de mon e não o valor da variavel
console.log(person)


// EMPTY, UNDEFINED E NULL

// todos retornão false se for verificar como boleano
// empty: number é 0, string é '' vazio, array [] vazio, objects {}, atribui um valor vazio
// null: valor não existe, mas a variavel é declarada
// undefined: nem declara a variavel
// console.log(typeof(abacaxi)); // undefined, pois não declarei, da erro
let abacaxi;
console.log(typeof(abacaxi)); // null, retorna undefined ainda ta vazio, mas da pra da valor de null
abacaxi = null;
console.log(abacaxi, abacaxi === false, abacaxi === true, ! abacaxi); // falsy values são tratados como falsos, mas não são iguais a false
let maca;
console.log(maca, ! maca);
