# Criar um servidor pra suas imagens usando o Registry

## Instalar Registry

### No server

```bash
# pra baixar o registry
docker run -d -p 5000:5000 --restart always --name registry registry:2
```

### No client

```bash
# pra criar uma imagem indicando o servidor
docker image tag image_name:1.0 ip_server:5000/image_name:1.0
```

```bash
curl ip_server:5000/v2/_catalog
#{"repositories":[]} # não vai ter nenhum pois não subiu nada ainda
```

```bash
# empurrar pro servidor
docker image push ip_server:5000/image_name:1.0
```

```bash
# se der erro edite abaixo, pra dizer para o docker que o servidor é seguro
touch /etc/docker/daemon.json
echo '{ "insecure-registries": ["ip_server:5000"] }' | cat > /etc/docker/daemon.json
# restartar o docker
systemctl restart docker
# repita o push
```

```bash
# agora pode apagar a imagem que esta no seu computador e quando precisar é so fazer um pull
docker image pull ip_server:5000/image_name:1.0
```

```bash
```

```bash
```
