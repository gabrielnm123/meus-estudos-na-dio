"use strict";
function jogarErro(erro, codigo) {
    throw { error: erro, code: codigo }; // uma interrupção no script
}
jogarErro('deu ruim', 500);
