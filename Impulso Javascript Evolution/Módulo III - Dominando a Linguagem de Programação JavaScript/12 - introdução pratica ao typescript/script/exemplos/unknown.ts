let anyDeNovo: any; // o any é uma ma prática em usar
anyDeNovo = 3;
anyDeNovo = 'teste';
anyDeNovo = false;

let stringTest: string = 'teste';
stringTest = anyDeNovo

let unknownValor: unknown; // boa pratica, caso não saiba o que é
unknownValor = 'teste';

let texto: string;
// texto = unknownValor; // desmarque pra ver o erro
// console.log(texto); // parei no video any esta devolta e sobre unknown minuto 2:50

if (typeof unknownValor === 'string') {
  texto = unknownValor; // quando confirmo o valor da variavel que não se sabia o que era posso usa-lo
}
