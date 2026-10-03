const carrinho = [
  { nome: "Camiseta", preco: 49.9 },
  { nome: "Calça", preco: 89.9 },
  { nome: "Tênis", preco: 199.9 },
  { nome: "Boné", preco: 29.9 },
  { nome: "Meia", preco: 15.9 },
];

const total = carrinho.reduce((acumulador, produto) => {
  return acumulador + produto.preco;
}, 0);

console.log(`Total do carrinho: R$ ${total}`);
