
export default class Produto {
  constructor(id, nome, preco, estoque) {
    this.id = id;
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;
  }

  atualizarDados(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;
  }
}
