const prompt = require("prompt-sync")();

const atividades = [];

const exerciciosDisponiveis = [
  "Corrida",
  "Caminhada",
  "Ciclismo",
  "Musculação",
  "Futebol",
  "Vôlei",
  "Basquete",
];

function menu() {
  let operacao = 5;

  do {
    console.log("Operações disponíveis:");
    console.log("1 - Registrar atividade");
    console.log("2 - Ver histórico");
    console.log("0 - Sair");

    operacao = Number(prompt("Digite uma opção: "));

    switch (operacao) {
      case 1:
        console.log("Registrando atividade...");
        registraAtividade();
        break;
      case 2:
        console.log("Visualizando histórico...");
        visualizaHistorico();
        break;
      case 0:
        console.log("Saindo...");
        break;
      default:
        console.log("Digite uma opção válida.");
    }
  } while (operacao !== 0);

  console.log("Saiu.");
}

function registraAtividade() {
  console.log("Exercícios disponíveis para registro:");
  for (let i = 0; i < exerciciosDisponiveis.length; i++) {
    console.log(`${i + 1} - ${exerciciosDisponiveis[i]}`);
  }
  const opcaoSelecionada = Number(prompt("Digite uma opção de exercício: "));
  const exercicioSelecionado = exerciciosDisponiveis[opcaoSelecionada - 1];
  const tempoAtividade = Number(
    prompt("Quantos minutos durou essa atividade? "),
  );
  const distanciaAtividade = Number(
    prompt("Qual a distância em metros? (opcional) "),
  );

  const atividade = {
    exercicio: exercicioSelecionado,
    distanciaPercorrida: distanciaAtividade,
    tempo: tempoAtividade,
  };

  atividades.push(atividade);
}

function visualizaHistorico() {
  if (atividades.length < 1) {
    console.log("Não há atividades registradas.");
    return;
  }

  console.log("*** Histórico de atividades ***");
  atividades.forEach((atividade, i) => {
    console.log(
      `${i + 1} - ${atividade.exercicio} | Distância: ${atividade.distanciaPercorrida}m | Tempo: ${atividade.tempo}min.`,
    );
  });
}

menu();
