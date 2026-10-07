# studies# CRUD Terminal Node.js

CRUD de produtos desenvolvido em Node.js para execução no terminal.

O projeto foi desenvolvido com o objetivo de praticar os principais conceitos de JavaScript e Node.js, incluindo funções, arrays, objetos, estruturas de repetição, condicionais, métodos de array e validação de dados.

## Tecnologias utilizadas

* Node.js
* JavaScript
* prompt-sync
* Git e GitHub

## Funcionalidades

* Cadastrar produtos
* Listar produtos
* Buscar produto por ID
* Atualizar produtos
* Remover produtos
* Geração automática de ID
* Validação de campos obrigatórios
* Validação de preço
* Validação de estoque
* Impedimento de valores negativos
* Impedimento de estoque com valores decimais

## Estrutura do projeto

```text
crud-terminal-node/
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

## Como executar

### 1. Clone o repositório

```bash
git clone <URL_DO_REPOSITORIO>
```

### 2. Acesse a pasta do projeto

```bash
cd crud-terminal-node
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute o projeto

```bash
node index.js
```

## Como utilizar

Ao iniciar o programa, será apresentado um menu com as seguintes opções:

```text
1 - Cadastrar Produto
2 - Listar Produtos
3 - Buscar Produto por ID
4 - Atualizar Produto
5 - Remover Produto
0 - Sair
```

Os produtos possuem os seguintes dados:

* ID
* Nome
* Preço
* Estoque

O ID é gerado automaticamente pelo sistema.

## Objetivo do projeto

Este projeto faz parte dos estudos de desenvolvimento com JavaScript e Node.js, com foco na construção de um CRUD completo executado pelo terminal.
