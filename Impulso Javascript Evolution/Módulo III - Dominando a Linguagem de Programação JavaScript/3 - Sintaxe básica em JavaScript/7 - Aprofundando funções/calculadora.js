function calculadora() {
  function nova_operacao() {
    let opcao = prompt('Quer fazer outra operação?\n1 - Sim\n2 - Não');
    if (opcao == 1) {
      calculadora();
    } else if (opcao == 2) {
      alert('ate mais')
    } else {
      alert('digite uma opção válida');
      nova_operacao();
    }
  }
  const operacao = Number(prompt('Escolha uma operação:\n1 - Soma (+)\n2 - Subtração (-)\n3 - Multiplicação (*)\n4 - Divisão (/)\n5 - Divisão Inteira/Resto da Divisão (%)\n6 - Potenciação (**)')); // abre uma caixa de input no navegador
  if (operacao >= 7 || ! operacao) {
    alert('digite uma opção válida');
    calculadora();
  }
  let n1 = Number(prompt('Insira o primeiro número:'));
  if (typeof(n1) != 'number' || isNaN(n1) || ! n1) {
    alert('digite uma opção válida');
    calculadora();
  }
  let n2 = Number(prompt('Insira o segundo número:'));
  if (typeof(n2) != 'number' || isNaN(n2) || ! n2) {
    alert('digite uma opção válida');
    calculadora();
  }
  let resultado; 

  switch (operacao) {
    case 1:
      resultado = n1 + n2;
      alert(`${n1} + ${n2} = ${resultado}`);
      nova_operacao();
      break
    case 2:
      resultado = n1 - n2;
      alert(`${n1} - ${n2} = ${resultado}`);
      nova_operacao();
      break
    case 3:
      resultado = n1 * n2;
      alert(`${n1} * ${n2} = ${resultado}`);
      nova_operacao();
      break
    case 4:
      resultado = n1 / n2;
      alert(`${n1} / ${n2} = ${resultado}`);
      nova_operacao();
      break
    case 5:
      resultado = n1 % n2;
      alert(`${n1} % ${n2} = ${resultado}`);
      nova_operacao();
      break
    case 6:
      resultado = n1 ** n2;
      alert(`${n1} ** ${n2} = ${resultado}`);
      nova_operacao();
      break
  }
}

calculadora();
