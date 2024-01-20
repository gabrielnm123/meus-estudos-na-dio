interface IUsuario {
  id: string;
  email: string;
  cargo?: 'funcionario' | 'gerente' | 'coordenador' | 'supervisor'; // colocando ? depois do atributo ele se torna opcional
}


function redirecione(usuario: IUsuario) {
  if (usuario.cargo) {
    return `redirecionar para o setor ${usuario.cargo}`;
  }
}
