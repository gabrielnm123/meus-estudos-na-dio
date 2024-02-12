# Essa linha define a imagem base do seu container, que é o Debian. Isso é equivalente a ter o Debian instalado no seu PC.
FROM debian

# Essa linha executa os comandos para atualizar o sistema, instalar o Apache2 e limpar o cache. Isso é equivalente a rodar esses comandos no terminal do seu PC.
RUN apt-get update && apt-get install -y apache2 && apt-get clean

# Essas linhas definem as variáveis de ambiente que o Apache2 usa para configurar o servidor web. Isso é equivalente a editar o arquivo /etc/apache2/envvars no seu PC.
ENV APACHE LOCK DIR="var/lock"
ENV APACHE PID FILE="var/run/apache2. pid"
ENV APACHE RUN USER="www-data"
ENV APACHE RUN GROUP="www-data"
ENV APACHE LOG DIR="/var/log/apache2"

# Essa linha adiciona o arquivo site.tar ao diretório /var/www/html do seu container, que é o diretório padrão do Apache2 para servir os arquivos estáticos. Isso é equivalente a extrair o arquivo site.tar no diretório /var/www/html do seu PC.
ADD site.tar /var/www/html

# Essa linha adiciona uma etiqueta à sua imagem, que é uma forma de adicionar metadados descritivos. Isso não tem um equivalente direto no seu PC, mas é útil para documentar a sua imagem.
LABEL description = "Apache webserver 1.0"

# Essa linha cria um volume no diretório /var/www/html do seu container, que é uma forma de persistir os dados nesse diretório mesmo se o container for removido. Isso é equivalente a ter uma partição separada no seu PC para esse diretório.
VOLUME /var/www/html

# Essa linha expõe a porta 80 do seu container, que é a porta padrão do Apache2 para receber as requisições HTTP. Isso é equivalente a abrir a porta 80 no firewall do seu PC.
EXPOSE 80

# Essa linha define o comando que será executado quando o container for iniciado, que é o apachectl, o utilitário de controle do Apache2. Isso é equivalente a rodar o comando apachectl no terminal do seu PC.
ENTRYPOINT ["/usr/sbin/apachectl"]

# Essa linha define o argumento que será passado para o comando definido no ENTRYPOINT, que é o -D FOREGROUND, que faz o Apache2 rodar em primeiro plano. Isso é equivalente a rodar o comando apachectl -D FOREGROUND no terminal do seu PC.
CMD ["-D", "FOREGROUND"]

# docker build -t debian-apache:1.0 .
# docker container run -dti -p 80:80 --name meu-apache debian-apache:1.0