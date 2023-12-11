numberOne = 1;
var numberOne; // so da pra declarar depois de atribuir usando o var o let da erro, hoisting, var é o unico que faz hoisting
console.log(numberOne);
var numberOne = 3; // var pode redeclarar
if (numberOne === 3) {
  let numberOne = undefined; // a variavel declarada com let so existe dentro do bloco na qual ela foi declarada
  // let numberOne = 1; // não posso redeclarar
  numberOne = 2;
  console.log(numberOne);
}
console.log(numberOne);

// por padrão usar let


const FIRST_NAME = 'Gabriel'; // não redeclara e nem reatribui