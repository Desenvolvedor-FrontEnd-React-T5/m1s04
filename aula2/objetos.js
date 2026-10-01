
const produto = {
    nome: "Camiseta Lab365",
    preco: 49.90,
    qtdEstoque: 15,
    disponivel: true
};


console.log(produto);
console.log(produto.nome);
console.log(produto.preco);

console.log(produto["disponivel"]);

produto.categoria = "Roupa";
produto["descricao"] = "Camiseta com logo do Lab365";

console.log(produto);

delete produto.descricao;

console.log(produto);

console.log(Object.keys(produto));
console.log(Object.values(produto));
