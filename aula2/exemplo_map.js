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

/* for (let i = 0; i < produtos.length; i++) {
    console.log(produtos[i]);
} */

console.log("Preços originais dos produtos:")
produtos.forEach((produto) => console.log(produto));

const produtosComDesconto = produtos.map((produto) => {
  const novoPreco = produto.preco * 0.8;
  produto.preco = novoPreco;
  return produto;
});

console.log("Produtos com desconto:");
produtosComDesconto.forEach(produto => console.log(produto));

const nomesProdutos = produtos.map(produto => produto.nome);
console.log(nomesProdutos);
