const prompt = require("prompt-sync")();

const frutas = [
  "maçã",
  "pitaya",
  "banana",
  "abacate",
  "maracujá",
  "tâmara",
  "abacaxi",
  "pêssego",
];

console.log(frutas);
console.log("última fruta da lista: " + frutas[frutas.length - 1]);

frutas.sort();

console.log(frutas);
console.log("última fruta da lista: " + frutas[frutas.length - 1]);

const frutaUsuario = prompt("Digite uma fruta para buscar: ");
if (frutas.includes(frutaUsuario)) {
  console.log("Fruta está disponível!");
  console.log(frutas.indexOf(frutaUsuario));
} else {
  console.log("Acabou :(");
}

let nota1 = Number(prompt("Digite a nota 1: "));
let nota2 = Number(prompt("Digite a nota 2: "));
let nota3 = Number(prompt("Digite a nota 3: "));

const notas = [];
console.log(notas);

notas.push(nota1);
notas.push(nota2);
notas.push(nota3);

console.log(notas);

console.log("Nota do mini-projeto: " + notas[0]);
console.log("Nota do projeto final: " + notas[1]);
console.log("Nota dos exercícios: " + notas[2]);
console.log("Nota final: " + notas[3]); //undefined

const misto = ["João", 35, true];

misto[0] = "João Victor";
misto[misto.length] = "Oliveira";
misto[misto.length] = "Tubarão";

console.log(misto);

let itemRemovido = misto.pop();
console.log("Item removido: " + itemRemovido);

console.log(misto);
console.log(misto.length);

let elementoInicialRemovido = misto.shift();
console.log(misto);

misto.unshift(elementoInicialRemovido);
console.log(misto);

const vazio = [];
console.log(typeof vazio);
console.log(vazio[0]); //undefined
console.log(vazio.length);
