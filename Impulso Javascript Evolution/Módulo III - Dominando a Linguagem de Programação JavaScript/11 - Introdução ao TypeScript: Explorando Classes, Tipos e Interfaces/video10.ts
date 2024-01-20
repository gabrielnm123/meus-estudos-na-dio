interface Cachorro {
  nome: string;
  idade: number;
  parqueFavorito?: string;
}

type CachorroSomenteLeitura = {
  readonly [K in keyof Cachorro]-?: Cachorro[K] // readonly deixa o item so de leitura, keyof é chaveiro, pra cada chave no chaveiro, -? tira os opcionais
}

class MeuCachorro implements Cachorro {
  idade;
  nome;
  parqueFavorito;

  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

const cao = new MeuCachorro('Apolo', 14);
cao.idade = 8;  // era pra dar erro, pois não era pra aceitar a mudanda de atributo

console.log(cao);
