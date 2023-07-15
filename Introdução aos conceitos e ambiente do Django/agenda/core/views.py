from django.shortcuts import render, redirect
from core.models import Evento
from django.contrib.auth.decorators import login_required # caso nao esteja logado, da um erro na pagina
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from datetime import datetime
from django.http.response import Http404, JsonResponse # parou aqui

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

""" Claro! Aqui está um passo a passo de como modificar a função de visualização evento no arquivo views.py para recuperar o evento com o ID passado na URL e passar seus dados para o modelo evento.html:

Na função de visualização evento, verifique se o ID do evento foi passado na URL usando request.GET.get('id').
Se um ID de evento foi passado, recupere o evento com esse ID do banco de dados usando Evento.objects.get(id=id_evento).
Passe os dados do evento para o modelo evento.html adicionando-os ao contexto do modelo. Por exemplo: return render(request, 'evento.html', {'evento': evento}).
No modelo evento.html, use os dados do evento para preencher os campos do formulário. Por exemplo: <input type="text" name="titulo" size="23" value="{{evento.titulo}}">.
Aqui está um exemplo de como a função de visualização evento pode ser modificada:

@login_required(login_url='/login/')
def evento(request):
    id_evento = request.GET.get('id')
    dados = {}
    if id_evento:
        evento = Evento.objects.get(id=id_evento)
        dados['evento'] = evento
    return render(request, 'evento.html', dados)
E aqui está um exemplo de como o modelo evento.html pode ser modificado para usar os dados do evento:

<input type="text" name="titulo" size="23" value="{{evento.titulo}}">
<input type="datetime-local" name="data_evento" value="{{evento.data_evento|date:'Y-m-d\TH:i'}}">
<textarea name="descricao" cols="23" rows="5">{{evento.descricao}}</textarea>
Espero que isso ajude! Você tem mais alguma dúvida?

Mensagem recebida. Claro! Aqui está um passo a passo de como modificar a função de visualização `evento` no arquivo `views.py` para recuperar o evento com o ID passado na URL e passar seus dados para o modelo `evento.html`: 1. Na função de visualização `evento`, verifique se o ID do evento foi passado na URL usando `request.GET.get('id')`. 2. Se um ID de evento foi passado, recupere o evento com esse ID do banco de dados usando `Evento.objects.get(id=id_evento)`. 3. Passe os dados do evento para o modelo `evento.html` adicionando-os ao contexto do modelo. Por exemplo: `return render(request, 'evento.html', {'evento': evento})`. 4. No modelo `evento.html`, use os dados do evento para preencher os campos do formulário. Por exemplo: `<input type="text" name="titulo" size="23" value="{{evento.titulo}}">`. Aqui está um exemplo de como a função de visualização `evento` pode ser modificada: ```python @login_required(login_url='/login/') def evento(request): id_evento = request.GET.get('id') dados = {} if id_evento: evento = Evento.objects.get(id=id_evento) dados['evento'] = evento return render(request, 'evento.html', dados) ``` E aqui está um exemplo de como o modelo `evento.html` pode ser modificado para usar os dados do evento: ```html <input type="text" name="titulo" size="23" value="{{evento.titulo}}"> <input type="datetime-local" name="data_evento" value="{{evento.data_evento|date:'Y-m-d\TH:i'}}"> <textarea name="descricao" cols="23" rows="5">{{evento.descricao}}</textarea> ``` Espero que isso ajude! Você tem mais alguma dúvida?
 """
@login_required(login_url='/login/')
def evento(request):
    id_evento = request.GET.get('id')
    dados = {}
    try:
        dados['evento'] = Evento.objects.get(id=id_evento)
    except Exception:
        raise Http404()
    return render(request, 'evento.html', dados)

@login_required(login_url='/login/')
def submit_evento(request):
    if request.POST:
        titulo = request.POST.get('titulo')
        data_evento = request.POST.get('data_evento')
        descricao = request.POST.get('descricao')
        usuario = request.user
        id_evento = request.POST.get('id_evento') # recupera o id, se tiver
        if id_evento: # se tiver id é true
            evento = Evento.objects.get(id=id_evento)
            if evento.usuario == usuario:
                evento.titulo = titulo
                evento.descricao = descricao
                evento.data_evento = data_evento
                evento.save() # faz a mesma coisa que update, mas verifica se quem solicita é o dono do evento
            # Evento.objects.filter(id=id_evento).update( # atualiza (update)
            #     titulo=titulo,
            #     data_evento=data_evento,
            #     descricao=descricao
            # )
        else:
            Evento.objects.create( # se não, cria (create)
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
    data_atual = datetime.now()
    # eventos = Evento.objects.all() # mostar tudo, cuidado com esse comando pois pode ter muito registro e dar ruim
    evento = Evento.objects.filter(usuario=usuario,
                                #    data_evento__gt=data_atual # gt maior que, lt menor que 
                                   ) # quase mesma coisa do all, mas mostra os eventos do usuario logado
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