<h3 align="center">
  Sistema de gerencialmento de dívidas
</h3>

## :rocket: Sobre

gerenciamento de dívidas e
devedores, fazendo a relação das dívidas com as pessoas existentes no
JSONPlaceholder.

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

### Tecnológias

JavaScript
Node.js
ReactJS

### Requerimentos

- [Node.js LTS version](https://nodejs.org/en/)
- [Postgresql](https://www.postgresql.org/)
- [yarn](https://yarnpkg.com/)

## Instalação

  Faça o clone do projeto, onde ira baixar duas pastas (api e web):
  https://github.com/PauloFelipeM/dividas.git

  Com o postgresql instalado, crie um banco de dados em branco (Nome de sua preferência) e guarde as credenciais.

## API

  Entre no diretório: cd /api/

  Execute o comando: "npm install" ou "yarn install" para instalar as dependências do projeto.

  Crie um arquivo na raiz da pasta /api chamado .env
  Copie todos os dados do arquivo .env.example para o .env

  Em seguida informe as configurações do banco de dados criado no postgresql, assim como as credenciais:
  DB_HOST=IP_DO_SERVIDOR
  DB_USER=NOME_DO_USUARIO
  DB_PASS=SENHA
  DB_NAME=NOME_DO_BANCO

  Ainda na raiz do projeto execute o comando de migração para criar as tabelas no banco de dados:
  yarn sequelize db:migrate
  
  Após a criação das tabelas execute o comando: "yarn dev" ou "npm dev" para inicializar a api.

## FRONT-END (WEB)

  Entre no diretório da web: cd /web/
  
  Execute o comando: "npm install" ou "yarn install" para instalar as dependências do projeto.
  
  Após a finalização execute o comando: "yarn start" ou "npm start" para incializar o projeto.

## USABILIDADE

  Ao abrir o site, crie um novo usuário e realize o login.
  
  Na tela inicial é possível selecionar um cliente (Da lista do JSONPlaceholder),
  e ao selecionar ele mostrará suas dívidas, é possível inserir uma nova dívida clicando em novo e preenchendo os dados necessários.
  
  Ao clicar em uma dívida é possível altera-la e exclui-la.
  
  No menu "Menu Perfil" na barra de ações é possível alterar seus dados.
