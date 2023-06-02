from django.shortcuts import render
from core.models import Evento

# Create your views here.
def lista_eventos(request):
    # evento = Evento.objects.get(id=1) # mostar somente um
    usuario = request.user
    # eventos = Evento.objects.all() # mostar tudo, cuidado com esse comando pois pode ter muito registro e dar ruim
    evento = Evento.objects.filter(usuario=usuario) # quase mesma coisa do all, mas mostra os eventos do usuario logado
    dados = {'eventos': evento} # nome que vai no html
    return render(request, 'agenda.html', dados)