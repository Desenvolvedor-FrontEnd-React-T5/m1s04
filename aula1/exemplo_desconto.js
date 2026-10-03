const desconto_percentual = 0.1;
const calcularValorFinal = (valor_compra) =>
  valor_compra <= 100 ? valor_compra : valor_compra * (1 - desconto_percentual);

// Array com os valores de cada compra
const compras = [50, 100, 200, 75, 150, 300, 90, 250];

// Percorrendo cada compra com for
/* for (let i = 0; i < compras.length; i++) {
  const total = calcularValorTotal(compras[i]);
  console.log(`Compra ${i + 1}: R$ ${compras[i]} → Pagar: R$ ${total}`);
} */
// Em vez de chamar a função 8 vezes manualmente, o loop percorre o array inteiro e aplica o cálculo para cada valor automaticamente.

//usando forEach:
compras.forEach((compra, i) => {
  const valorFinal = calcularValorFinal(compra);
  console.log(`Compra ${i + 1}: R$ ${compra} → Pagar: R$ ${valorFinal}`);
});
