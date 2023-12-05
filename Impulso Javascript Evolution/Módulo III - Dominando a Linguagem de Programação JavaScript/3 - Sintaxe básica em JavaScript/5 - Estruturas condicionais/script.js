var jogador1 = 0;
var jogador2 = 0;
var placar;

jogador1 >= 0 || jogador2 >= 0 ? console.log('jogadores válidos') : console.log('jogadores inválidos')
if (jogador1 >= 0 || jogador2 >= 0) {
  if (jogador1 > 0 && jogador2 === 0) {
    console.log('jogador 1 marcou ponto');
    placar = jogador1 > jogador2;
  } else if (jogador2 > 0 && jogador1 === 0) {
    console.log('jogador 2 marcou ponto');
    placar = jogador2 > jogador1
  } else {
    console.log('ninguem marcou pontos')
  }
}
