"use strict";
let valorAny; // valor any pode ter qualquer valor
valorAny = 3;
valorAny = 'olá';
valorAny = true;
let valorString = 'teste';
// valorString = true; // da erro pq o tipo da variavel é string
valorString = valorAny; // agora não da erro, pq? pq pode se qualquer coisa
console.log(`string1: ${valorString}`); // imprime true
let valorString2 = 'testão';
valorString2 = valorAny;
console.log(`string2: ${valorString2}`);
function somarString(string1, string2) {
    console.log(string1 + string2);
}
somarString(valorString, valorString2);
