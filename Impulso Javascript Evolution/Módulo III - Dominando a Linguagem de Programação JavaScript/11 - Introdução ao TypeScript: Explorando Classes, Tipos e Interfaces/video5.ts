// types

interface IAnimal {
  nome: string;
  tipo: 'terrestre' | 'aquático';
  domestico: boolean;
}

interface IFelino extends IAnimal{
  visaoNoturna: boolean;
}

interface ICanino extends IAnimal {
  porte: 'pequeno' | 'médio' | 'grande';
}

type IDomestico = IFelino | ICanino;

const animal: IDomestico = {
  domestico: true,
  nome: 'cachorro',
  porte: 'médio',
  tipo: "terrestre",
  visaoNoturna: true // era pra da um erro pq era pra ser ou um ou outro não os dois (IFelino ou ICanino)
}

// animal.executarRugido('s') // veja o erro

// const felino: IFelino = { // veja o erro
//   nome: 'Leão', 
//   tipo: 'terrestre',
//   visaoNoturna: true
// }