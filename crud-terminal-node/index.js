import PromptSync from "prompt-sync";

const prompt = PromptSync();

const produtos = [];

let proximoId = 1;
let opcao = "";


while (opcao !== "0") {


    console.log("CRUD PRODUTOS");
    console.log("1 - Cadastrar Produto");
    console.log("2 - Listar Produtos");
    console.log("3 - Buscar Produto por ID");
    console.log("4 - Atualizar Produto");
    console.log("5 - Remover Produto");
    console.log("0 - Sair");

    opcao = prompt("Escolha uma Opção: ");

    switch (opcao) {
        case "1":
            console.log("=== Cadastro de Produto ===");

            const nome = prompt("Nome: ");
                if (nome.trim() === "") {
                    console.log("Nome inválido. Cadastro Cancelado.");
                    break;
                }
            const preco = Number(prompt("Preço: "));
                if (Number.isNaN(preco)) {
                    console.log("Preço inválido. Cadastro Cancelado.");
                    break;
                }
            const estoque = Number(prompt("Estoque: "));
                if (Number.isNaN(estoque)) {
                    console.log("Estoque inválido. Cadastro Cancelado.");
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
        case "2":
            console.log("=== Lista de Produtos ===");
            if (produtos.length === 0) {
                console.log("Nenhum produto cadastrado.");
            }
            for (const produto of produtos) {
                console.log("-------------------------");
                console.log(`ID: ${produto.id}`);
                console.log(`Nome: ${produto.nome}`);
                console.log(`Preço: R$ ${produto.preco}`);
                console.log(`Estoque: ${produto.estoque}`)
            }
                break;
        case "3":
            console.log("Buscar Produto por ID");
            break;
        case "4":
            console.log("Atualizar Produto");
            break;
        case "5":
            console.log("Remover Produto");
            break;
        case "0":
            console.log("Saindo...");
            break;
        default:
            console.log("Opção inválida. Tente novamente.");
    }

}