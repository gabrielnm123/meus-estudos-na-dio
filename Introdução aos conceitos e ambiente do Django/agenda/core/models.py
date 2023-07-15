from django.db import models
from django.contrib.auth.models import User # banco de dados do django
from datetime import datetime, timedelta
# Create your models here.

class Evento(models.Model): # criando tabela para manipular a agenda
    titulo = models.CharField(max_length=100) # max_length é o limite de caractere nesse campo
    descricao = models.TextField(blank=True, null=True) # o primeiro parametro define que esse campo pode fircar em branco e o segundo diz que pode ser nulo

    # verbose_name é pra quando for mostrar no site o dado mostrar o que determinar
    data_evento = models.DateTimeField(verbose_name='Data do Evento') # registar a data do evento
    data_criacao = models.DateTimeField(auto_now=True, verbose_name='Data da Criação') # dado automático pra registrar a data da criação

    usuario = models.ForeignKey(User, on_delete=models.CASCADE) # se não colocar o on_delete da erro, pois preciso tratar quando ele for apagado, o usuario. CASCADE apagar tudo que tem nele, melhor usar outra tecnica, pra não perder os dados, mas pra fins de teste é bom usar.
    # usar o python manage.py makemigrations core pra ver se teve modificação no core
    """ 

    selecione a primeira opção

        É impossível adicionar um campo não anulável 'usuario' ao evento sem especificar um padrão. Isso ocorre porque o banco de dados precisa de algo para preencher linhas existentes.
    Selecione uma correção:
    1) Forneça um padrão único agora (será definido em todas as linhas existentes com um valor nulo para esta coluna)
    2) Feche e defina manualmente um valor padrão em models.py.
    Selecione uma opção:  """
    """

    depois aparece isso, digitei 1 pra constar que já existe 1 usuario, pois tornou obrigatorio o campo de usuario, se tivese blank=True, null=True nao ia precisar

        Insira o valor padrão como Python válido.
    Os módulos datetime e django.utils.timezone estão disponíveis, portanto, é possível fornecer, por exemplo, timezone.now como um valor.
    Digite 'exit' para sair deste prompt
     
      como resultado aparece isso
       
        Migrações para 'core':
  núcleo/migrações/0002_evento_usuario_alter_evento_data_criacao_and_more.py
    - Adicionar campo usuario ao evento
    - Alter campo data_criacao no evento
    - Alter campo data_evento no evento """
    # ❯ python manage.py sqlmigrate core 0002
    # ❯ python manage.py migrate core 0002
    
    class Meta:
        db_table = 'evento' # tabela tem nome evento
    
    def __str__(self) -> str:
        return self.titulo # assim o Evento object(1) viro o nome do titulo, no caso dentista
    
    def get_data_evento(self):
        return self.data_evento.strftime(r'%d/%m/%Y - %H:%M') # mudar padrão das datas

    def get_evento_atrasado(self):
        if self.data_evento < datetime.now():
            return True
        else:
            return False
