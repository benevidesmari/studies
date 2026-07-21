import PromptSync from "prompt-sync";

const prompt = PromptSync();

const produtos = [];

let proximoId = 1;
let opcao = "";

while (opcao !== "0") {
    console.log("\nCRUD PRODUTOS");
    console.log("1 - Cadastrar Produto");
    console.log("2 - Listar Produtos");
    console.log("3 - Buscar Produto por ID");
    console.log("4 - Atualizar Produto");
    console.log("5 - Remover Produto");
    console.log("0 - Sair");

    opcao = prompt("Escolha uma opção: ");

    switch (opcao) {

        // CASE 1
        case "1":
            console.log("\n=== Cadastro de Produto ===");

            const nome = prompt("Nome: ").trim();

            if (nome === "") {
                console.log("Nome inválido. Cadastro cancelado.");
                break;
            }

            const precoDigitado = prompt("Preço: ").trim();

            if (precoDigitado === "") {
                console.log("Preço inválido. Cadastro cancelado.");
                break;
            }

            const preco = Number(precoDigitado);

            if (Number.isNaN(preco)) {
                console.log("Preço inválido. Cadastro cancelado.");
                break;
            }

            const estoqueDigitado = prompt("Estoque: ").trim();

            if (estoqueDigitado === "") {
                console.log("Estoque inválido. Cadastro cancelado.");
                break;
            }

            const estoque = Number(estoqueDigitado);

            if (Number.isNaN(estoque)) {
                console.log("Estoque inválido. Cadastro cancelado.");
                break;
            }

            const produto = {
                id: proximoId,
                nome: nome,
                preco: preco,
                estoque: estoque
            };

            produtos.push(produto);
            proximoId++;

            console.log("Produto cadastrado com sucesso!");
            break;

        // CASE 2
        case "2":
            console.log("\n=== Lista de Produtos ===");

            if (produtos.length === 0) {
                console.log("Nenhum produto cadastrado.");
                break;
            }

            for (const produto of produtos) {
                console.log("-------------------------");
                console.log(`ID: ${produto.id}`);
                console.log(`Nome: ${produto.nome}`);
                console.log(`Preço: R$ ${produto.preco}`);
                console.log(`Estoque: ${produto.estoque}`);
            }

            break;

        // CASE 3
        case "3":
            console.log("\n=== Buscar Produto por ID ===");

            const idBuscado = Number(
                prompt("Digite o ID do produto: ")
            );

            const produtoEncontrado = produtos.find(
                produto => produto.id === idBuscado
            );

            if (produtoEncontrado === undefined) {
                console.log("Produto não encontrado.");
            } else {
                console.log("-------------------------");
                console.log(`ID: ${produtoEncontrado.id}`);
                console.log(`Nome: ${produtoEncontrado.nome}`);
                console.log(`Preço: R$ ${produtoEncontrado.preco}`);
                console.log(`Estoque: ${produtoEncontrado.estoque}`);
            }
            break;

        // CASE 4
        case "4":
            console.log("\n=== Atualizar Produto ===");

            const idAtualizar = Number(
                prompt("Digite o ID do produto: ")
            );

            const produtoAtualizar = produtos.find(
                produto => produto.id === idAtualizar
            );

            if (produtoAtualizar === undefined) {
                console.log("Produto não encontrado.");
                break;
            }

            console.log(`Produto encontrado: ${produtoAtualizar.nome}`);

            const novoNome = prompt("Novo nome: ").trim();

            if (novoNome === "") {
                console.log("Nome inválido. Atualização cancelada.");
                break;
            }
            const novoPrecoDigitado = prompt("Novo preço: ").trim();
            if (novoPrecoDigitado === "") {
                console.log("Preço inválido. Atualização cancelada.");
                break;
            }

            const novoPreco = Number(novoPrecoDigitado);

            if (Number.isNaN(novoPreco)) {
                console.log("Preço inválido. Atualização cancelada.");
                break;
            }
            const novoEstoqueDigitado = prompt("Novo estoque: ").trim();

            if (novoEstoqueDigitado === "") {
                console.log("Estoque inválido. Atualização cancelada.");
                break;
            }

            const novoEstoque = Number(novoEstoqueDigitado);

            if (Number.isNaN(novoEstoque)) {
                console.log("Estoque inválido. Atualização cancelada.");
                break;
            }
            produtoAtualizar.nome = novoNome;
            produtoAtualizar.preco = novoPreco;
            produtoAtualizar.estoque = novoEstoque;

            console.log("Produto atualizado com sucesso!");
            break;

        //CASE 5
        case "5":
            console.log("\n=== Remover Produto ===");

            const idRemover = Number(
                prompt("Digite o ID do produto: ")
            );

            const indiceProduto = produtos.findIndex(
                produto => produto.id === idRemover
            );

            if (indiceProduto === -1) {
                console.log("Produto não encontrado.");
                break;
            }

            const produtoRemovido = produtos.splice(indiceProduto, 1)[0];

            console.log(`Produto "${produtoRemovido.nome}" removido com sucesso!`);
            break;

        //CASE 0
        case "0":
            console.log("Saindo...");
            break;

        default:
            console.log("Opção inválida. Tente novamente.");
    }
}