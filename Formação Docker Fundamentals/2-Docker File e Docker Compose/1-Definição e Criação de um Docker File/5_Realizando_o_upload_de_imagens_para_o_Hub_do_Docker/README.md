# PUXAR E EMPURRAR IMAGENS

## EMPURRAR

```bash
docker login
```

```bash
docker build . -t nome-de-usuario/nome-da-imagem:1.0
```

```bash
docker push nome-de-usuario/nome-da-imagem:1.0
```

## PUXAR

Sempre lembrar de colocar a versão casa tenha, se não precisa ou coloca latest

```bash
docker pull nome-de-usuario/nome-da-imagem:1.0
```
