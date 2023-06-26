from django.contrib import admin
from core.models import Evento

# Register your models here. -> como ja diz registrar modelos

class EventoAdmin(admin.ModelAdmin):
    list_display = ('id', 'titulo', 'data_evento', 'data_criacao') # mostrar essas informações no display 
    list_filter = ('titulo', 'usuario', 'data_evento') # cria um filtro, não esqueça da virgula, pois é uma tupla

admin.site.register(Evento, EventoAdmin) # pra fazer o registro daquela classe, model...
