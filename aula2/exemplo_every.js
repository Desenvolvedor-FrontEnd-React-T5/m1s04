const prompt = require("prompt-sync")();

// busca os produtos através de uma requisição pro back-end.
const produtos = [
  {
    codigo: 123,
    nome: "Camiseta Lab365",
    preco: 49.9,
    qtdEstoque: 15,
    disponivel: true,
  },
  {
    codigo: 456,
    nome: "Caderno Lab365",
    preco: 29.9,
    qtdEstoque: 15,
    disponivel: true,
  },
  {
    codigo: 789,
    nome: "Caneca Lab365",
    preco: 39.9,
    qtdEstoque: 15,
    disponivel: true,
  },
  {
    codigo: 345,
    nome: "Caneta Lab365",
    preco: 19.9,
    qtdEstoque: 15,
    disponivel: true,
  },
  {
    codigo: 123,
    nome: "Moletom Lab365",
    preco: 99.9,
    qtdEstoque: 10,
    disponivel: false,
  },
  {
    codigo: 123,
    nome: "Bottom Lab365",
    preco: 19.9,
    qtdEstoque: 0,
    disponivel: true,
  },
];

console.log("Produtos totais:");
produtos.forEach(produto => console.log(produto));

const produtosDisponiveis = produtos.filter(
  (produto) => produto.disponivel && produto.qtdEstoque > 0,
);

console.log("Produtos disponíveis: ");

produtosDisponiveis.forEach(produto => console.log(produto));

const todosProdutosEmEstoque = produtos.every(
  (produto) => produto.qtdEstoque > 0 && produto.disponivel,
);

console.log(
  "Todos os produtos estão disponíveis e com estoque? " +
    todosProdutosEmEstoque,
);

const produtosFiltradosEstaoDisponiveis = produtosDisponiveis.every(
  (produto) => produto.qtdEstoque > 0 && produto.disponivel,
);

console.log(
  "Os produtos disponíveis foram filtrados corretamente? " +
    produtosFiltradosEstaoDisponiveis,
);
