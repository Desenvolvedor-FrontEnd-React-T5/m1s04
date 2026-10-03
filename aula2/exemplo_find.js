const prompt = require("prompt-sync")();

/* const produtos = ["Camiseta", "Tênis", "Calça", "Boné"];

const tenis = produtos.find((produto) => produto === "Tênis");

if (tenis) {
  console.log(tenis);
} */

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
];

const codigoParaBuscar = Number(
  prompt("Digite um código de produto para buscar: "),
);

const produtoEncontrado = produtos.find(
  (produto) => produto.codigo === codigoParaBuscar,
);

console.log(produtoEncontrado);
