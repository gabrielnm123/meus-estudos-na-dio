"use strict";
const pessoa = {
    nome: 'Gabriel',
    idade: 28,
    profissao: "Auxiliar Administrativo"
};
// outra forma abaixo
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedor"] = 2] = "Desenvolvedor";
    Profissao[Profissao["JogadorDeFutebol"] = 3] = "JogadorDeFutebol";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: 'Vanessa',
    idade: 18,
    profissao: Profissao.Professora
};
const joao = {
    nome: 'João',
    idade: 15,
    profissao: Profissao.Desenvolvedor,
    materias: ['python', 'javascript', 'html', 'css']
};
const carlito = {
    nome: 'Carlito',
    idade: 15,
    materias: ['python', 'javascript', 'html', 'css']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(carlito.materias);
