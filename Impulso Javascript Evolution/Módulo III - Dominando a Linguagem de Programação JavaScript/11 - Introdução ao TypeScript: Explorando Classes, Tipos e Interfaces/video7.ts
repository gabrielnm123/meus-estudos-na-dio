// Generic types

function adicionaApendiceALista<T>(array: any[], valor: T) { // é padrão usar o T
  return array.map(item => item + valor);
}

function adicionaApendiceALista2<T>(array: T[], valor: T) {
  return array.map(() => valor);
}

adicionaApendiceALista([1, 2, 3], 1); // passar mause na função instanciada aparece que o valor é number no lugar de T
// adicionaApendiceALista2([1, 2, 3], '1'); // da erro pois aparece que tem que todos iguais, pois 
