FROM python

WORKDIR /usr/src/app

COPY app.py /usr/src/app/

ENTRYPOINT [ "python" ]

# como ja estou trabalhando no diretório ...app... posso indicar o mesmo
CMD [ "./app.py" ]
# usar o 'docker image build . -t nome_da_imagem'