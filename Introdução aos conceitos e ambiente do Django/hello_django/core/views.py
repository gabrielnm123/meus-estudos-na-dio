from django.shortcuts import render, HttpResponse

# Create your views here.

def hello(request, name, idade):
    return HttpResponse(f'<h1>Hello {name} de {idade} anos!<h1>')
