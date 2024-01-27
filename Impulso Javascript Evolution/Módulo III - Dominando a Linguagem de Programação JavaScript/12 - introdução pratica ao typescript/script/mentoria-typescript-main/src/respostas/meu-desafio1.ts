// Como podemos rodar isso em um arquivo .ts sem causar erros? 

interface Employee {code: number, name: string};
let employee: Employee = {code: 10, name: 'John'};

// outra forma que podemos definir um objeto vazio
let funcionario = {} as Employee;
funcionario.code = 10
funcionario.name = 'John'