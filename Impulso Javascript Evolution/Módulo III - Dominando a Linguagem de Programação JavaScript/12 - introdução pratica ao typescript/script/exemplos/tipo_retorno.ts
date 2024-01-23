function somarValoresNumericos(numero1: number, numero2: number) {
  return numero1 + numero2.toString();
}

console.log(somarValoresNumericos(5, 2)) // não é o tipo correto que foi retornado, foi uma string e não um number abaixo como resolver isso dando tipo pra o return

function somarValoresNumericos2(numero1: number, numero2: number): number {
  return numero1 + numero2; 
}

console.log(somarValoresNumericos2(5, 2))
