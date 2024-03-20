# Instruções para Iniciar o Projeto

Este é um guia simples para baixar, configurar e iniciar o projeto no Visual Studio Code.

## 1. Baixar e Iniciar no Visual Studio Code

- Baixe o projeto para o seu computador.
- Abra o Visual Studio Code e navegue até o diretório raiz do projeto.

## 2. Configurar as Variáveis de Ambiente

Na raiz do projeto, crie um arquivo chamado `.env` e cole a seguinte variável:

DATABASE_URL="Mongo-URL"
Substitua "Mongo-URL" pela URL do seu banco de dados MongoDB.

## 3. Instalar Dependências:

No terminal do Visual Studio Code, execute o seguinte comando para instalar as dependências do projeto:

npm install

## 4. Gerar Prisma Client:

Ainda no terminal, execute o seguinte comando para gerar o Prisma Client:

npx prisma generate

## 5. Iniciar o Servidor:

Após a instalação das dependências e a geração do Prisma Client, o projeto estará pronto para uso. Para iniciar o servidor, execute o seguinte comando:


node src/server.js

-- Isso iniciará o servidor e você poderá começar a trabalhar no seu projeto.
