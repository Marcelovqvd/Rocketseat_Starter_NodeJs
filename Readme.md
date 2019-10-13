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

Tecnologias utilizadas:

- NodeJS;
- Express;
- Nodemon;
- MongoDB com Docker;
- Mongoose;
- Lib. require-dir;
- insomnia para testar;
- mongoose-paginate;
