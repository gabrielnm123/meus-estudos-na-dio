from django.shortcuts import (
    render, # renderizar o html
    HttpResponse # enterpretar o parametro e joga como resposta http
)

# Create your views here.

def hello(request, name, idade): # request vou enviar requisiçoes por isso o request
    return HttpResponse(f'<h1>Hello {name} de {idade} anos!<h1>')
