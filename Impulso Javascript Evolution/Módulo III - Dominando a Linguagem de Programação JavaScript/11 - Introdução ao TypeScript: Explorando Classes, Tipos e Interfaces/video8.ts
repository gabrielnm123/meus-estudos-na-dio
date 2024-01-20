interface IUsuario {
  id: string;
  email: string;
}

interface IAdmin extends IUsuario {
  cargo: 'gerente' | 'coordenador' | 'supervisor';
}

function redirecione(usuario: IUsuario | IAdmin) {
  if ('cargo' in usuario) {
    return 'redirecionar para area de administração'
  }
  return 'redirecionar para a área do usuário'
}
