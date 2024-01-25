function jogarErro(erro: string, codigo: number): never { // um codig que nunca finalizou, por algum motivo que nunca saberemos
  throw {error: erro, code: codigo} // uma interrupção no script
}

jogarErro('deu ruim', 500)
