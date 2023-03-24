"""
<Fatiamento>

"""

frase = 'Curso em Vídeo Python'
# cada caractere é contabilizada a partir do 0, no caso da frase são 21 caracteres de 0 a 20.
print(frase[9])  # Irá escrever a str 9.
print(frase[9:13])  # Escreve do caractere 9 até o  12 o 13 não entra.
print(frase[9:21])  # Não da erro, escreve do 9 até o 20.
print(frase[9:21:2])  # Faz a mesma coisa so que pulando de 2 em 2 e começando pelo 9.
print(frase[:5])  # Quando omito o valor é porque vai começar do caractere 0.
print(frase[15:])  # Quando omito e final é porque vai do 15 ate o final.
print(frase[9::3])  # Vai do nove até o final pulando de 3 em 3.
"""
<Análise>
"""
len(frase)  # Conta quantos caracteres tem.
frase.count('o')  # Conta quantos 'o' minúsculas.
frase.count('o', 0, 13)  # Faz o fatiamento do 0 até o 13,ou seja, elimina o 13, e conta quantos 'o' tem.
frase.find('deo')  # Encontra onde começa o 'deo'   , ou seja, retorna 11.
frase.find('Android')  # Quando pede-se pra encontrar caracteres que não existem retorna-se -1.
'Curso' in frase  # Existe a palavra curso em frase!!! Retorna True.(não é uma função e sim um operador)
"""<Transformação>"""
frase.replace('Python', 'Android')  # Troca Python por Android.
frase.upper()  # As letras que estavam em minúscula muda pra maiúscula.
frase.lower()  # O que tava em maiúscula fica minúscula.
frase.capitalize()  # Todas ficam minúsculas e a primeira caractere fica maiúscula.
frase.title()  # Identifica as palavras por espaços e capitaliza por palavra.
frase = '   Aprenda Python  '
frase.strip()  # Remove os espaços inuteis dos lados.
frase.rstrip()  # O r é de right(direita), remove somente os espaços da direita.
frase.lstrip()  # O l é de left(esquerda), remove os espaços da esquerda.
"""<Divisão>"""
frase = 'Curso em Video Python'
frase.split()  # Cada palavra, que é detectada por espaços vai receber indexação nova e vão parar em uma lista chamada
# frase.
"""<Junção>"""
'-'.join(frase)  # Junta a lista com '-'.
