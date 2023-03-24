# if ternario é usado para um retorno para uma variavel de um if simples, deixando seu código mais simples
saldo = 2000
saque = 2500
status = 'Sucesso' if saldo >= saque else 'Falha' # 'Sucesso' é rotornado para a variavel caso a condição lógica for atendida, se não retorna 'Falha'
print(f'{status} ao realizar o saque!')
