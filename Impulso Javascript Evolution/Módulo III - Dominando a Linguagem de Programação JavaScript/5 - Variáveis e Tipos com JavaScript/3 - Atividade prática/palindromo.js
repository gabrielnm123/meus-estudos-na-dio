// solução 1

function verificaPalindromo(string) {
  if (! string) return 'valor invalido, passe uma string não vazia';
  return string.split('').reverse().join('') === string;
}

console.log(verificaPalindromo('ovo'));
console.log(verificaPalindromo('papagaio'));
console.log(verificaPalindromo('Roma me tem amor'));
console.log(verificaPalindromo(''));
let string;
console.log(verificaPalindromo(string));

// minha solução pra valer com espaço
function verificaPalindromoFrase(string) {
  if (! string) return 'valor invalido, passe uma string não vazia';
  return string.replace(/ /g, '').split('').reverse().join('').toUpperCase() === string.toUpperCase().replace(/ /g, ''); // pra mudar todos os espaços por vazio tive que colocar espaço entre /espaço ou outro valor que queira substituir recursivamente/g
}

console.log(verificaPalindromoFrase('ovo'));
console.log(verificaPalindromoFrase('papagaio'));
console.log(verificaPalindromoFrase('Roma me tem amor'));

// soluçao 2
function verificaPalindromo2(string) {
  if (! string) return 'valor invalido, passe uma string não vazia';
  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) return false; // se algum for diferente retorna false
  }
  return true;
}

console.log(verificaPalindromo2('abbbba'));
console.log(verificaPalindromo2('gato'));
