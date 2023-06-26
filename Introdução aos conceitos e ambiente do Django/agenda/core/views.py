from django.shortcuts import render, redirect
from core.models import Evento
from django.contrib.auth.decorators import login_required # caso nao esteja logado, da um erro na pagina
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages

# Create your views here.

# def index(request):
#     return redirect('/agenda/')

def submit_login(request):
    if request.POST: # se a requisição for do tipo POST é verdadeiro
        username = request.POST.get('username')
        password = request.POST.get('password')
        usuario = authenticate(username=username, password=password)
        if usuario is not None:
            login(request, usuario)
            return redirect ('/') # quando autenticado volta por indice que vai pra agenda que verifica que esta autenticado e mostrar o conteudo
        else:
            messages.error(request, 'Usuário ou senha inválido') # se der erro no login, da uma mensagem de erro no html login
    return redirect('/') # independente se for um post ou não sempre vai direcionar pra pagina inicial

def login_user(request):
    return render(request, 'login.html') # abrir a pagina login.html

def logout_user(request):
    logout(request)
    return redirect('/')

@login_required(login_url='/login/')
def evento(request):
    return render(request, 'evento.html')

@login_required(login_url='/login/')
def submit_evento(request):
    if request.POST:
        titulo = request.POST.get('titulo')
        data_evento = request.POST.get('data_evento')
        descricao = request.POST.get('descricao')
        usuario = request.user
        Evento.objects.create(
            titulo=titulo,
            data_evento=data_evento,
            descricao=descricao,
            usuario=usuario
        )
    return redirect('/')

@login_required(login_url='/login/') # arroba pra indicar que é um decorador, se não autenticado da page not, found, login_url='/login/' server pra quando der não autenticado ele vai direcionar para essa pagina
def lista_eventos(request):
    # evento = Evento.objects.get(id=1) # mostar somente um
    usuario = request.user
    # eventos = Evento.objects.all() # mostar tudo, cuidado com esse comando pois pode ter muito registro e dar ruim
    evento = Evento.objects.filter(usuario=usuario) # quase mesma coisa do all, mas mostra os eventos do usuario logado
    dados = {'eventos': evento} # nome que vai no html
    return render(request, 'agenda.html', dados)

@login_required(login_url='/login/')
def delete_evento(request, id_evento):
    # Evento.objects.filter(id=id_evento).delete() --> tem uma falha porque deleta tbm de outros usuarios
    usuario = request.user 
    evento = Evento.objects.get(id=id_evento)
    if usuario == evento.usuario:
        # so deleta porque compara se usuario que recebe o usuario atual for igual com o usuario do evento
        evento.delete()   
    return redirect('/')