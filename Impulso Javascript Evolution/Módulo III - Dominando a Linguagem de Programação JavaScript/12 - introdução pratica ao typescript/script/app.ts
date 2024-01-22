let valorAny: any; // valor any pode ter qualquer valor
valorAny = 3;
valorAny = 'olá';
valorAny = true;

let valorString: string = 'teste';
// valorString = true; // da erro pq o tipo da variavel é string
valorString = valorAny; // agora não da erro, pq? pq pode se qualquer coisa
console.log(valorString); // imprime true
let valorString2: string = 'testão'

function somarString(string1: string, string2: string) {
  console.log(string1 + string2)
}
