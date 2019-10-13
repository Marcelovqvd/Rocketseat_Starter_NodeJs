# NodeJs - projeto para estudo

## curso - Rocketseat

Criação de API tendo como exemplo o site https://www.producthunt.com/

## Download mongo via Docker

\$ docker pull mongo

## Máquina virtual para rodar o mongo

\$ docker run --name mongodb -p 27017:27017 -d mongo

O comando acima significa que:

- --name: é o nome que se escolhe para a máquina virtual/container;

- -p 27017:27017: quer dizer o redirecionamento de porta. O mongodb utiliza a porta 27017. Então quer dizer q qdo se tenta acessar a porta 27017 de nossa máquina, será redirecionado à porta 27017 do mongodb que está instalado neste container.

- -d mongo: diz qual imnagem vai ser utilizada


    $ docker ps

Retorna quais imagens estão rodando

    $ docker ps -a

Retorna quais imagens estão pausadas

    $ docker start mongodb

Executa a imagem (docker start nome do db)

Para testar

    http://localhost:27017

Para testar e ver os schemas usar o software - Robo3T

    https://robomongo.org/download

## conectando com o banco de dados

mongoose
É um ORM de bancos não relacionais com mongodb. O ORM permite usar código Javascript para manipular o banco de dados. Transforma as tabelas do banco de dados em objetos Javascript

Dentro do model vai ficar o Schema

#### Schema

Define quais são os campos que um produto pode ter e que tipo de valores estes campos vão salvar.

Agora, o model 'Product' está registrado na aplicação.

Esse modo será required em server.js

    require('./src/models/Product');

#### biblioteca require-dir

    $ yarn add require-dir

Esta lib faz o require de todos os arquivos automaticamente

Tecnologias utilizadas:

- NodeJS;
- Express;
- Nodemon;
- MongoDB com Docker;
- Mongoose;
- Lib. require-dir;
- insomnia para testar;
- mongoose-paginate;
