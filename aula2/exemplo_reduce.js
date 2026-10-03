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

const valorTotalProdutos = produtos.reduce((acc, produto) => {
  return acc + produto.preco;
}, 0);

console.log("Valor total de todos os produtos: R$" + valorTotalProdutos);

const valorTotalProdutosEmEstoque = produtos.reduce((acc, produto) => {
  return acc + (produto.preco * produto.qtdEstoque);
}, 0);

console.log(
  "Valor somando todos os produtos em estoque: R$" +
    valorTotalProdutosEmEstoque,
);
