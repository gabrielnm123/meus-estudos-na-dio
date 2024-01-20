// criar typings.d.ts pra definir os types gerais da aplicação

interface Estudante {
  nome: string;
  idade: number;
}

interface Estudante {
  serie: string;
}

const estudante: Estudante = {
  // espaco mais enter vai mostrar os 3 atributos, pois a interface Estudante não foi substituida, mas sim espandida, é concatenado. E é isso que pode ser feito no arquivo typings
  nome: 'Gabriel',
  idade: 28,
  serie: '5 B'
}

/////////////////////////////

import $ from 'jquery'; // baixa e instala quando executa o parcel
// "dependencies": {
//   "jquery": "^3.7.1",
// acima é o que fica em package.json, pois foi instalado e quardado como dependencia da aplicação

$.fn.extend({
  novaFuncao() { // adicionar novaFuncao no JQuery no typings
    console.log('Chamou nova função')
  }
})
$('body').novaFuncao(); // so funcionou pq adicionei a novaFuncao em typings.d.ts


// em tsconfig.json, que é criado usando o comando tsc --init, definir seus valores pra usar javascritp numa versão que os navagadores que a aplicação vai usar
