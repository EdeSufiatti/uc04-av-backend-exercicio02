import { randomInt } from "crypto";


function gerarPesosPacotes(quantidade: number): number[] {
  const pesos: number[] = [];
  for (let i = 0; i < quantidade; i++) {
    pesos.push(randomInt(400, 600));
  }
  return pesos;
}


function obterMaiorPeso(pesos: number[]): number {
  return Math.max(...pesos);
}

function obterMenorPeso(pesos: number[]): number {
  return Math.min(...pesos);
}

function calcularVariacao(maior: number, menor: number): number {
  return ((maior - menor) / 500) * 100;
}


function contarPacotesAcima(pesos: number[]): number {
  return pesos.filter((peso) => peso > 500).length;
}


function contarPacotesAbaixo(pesos: number[]): number {
  return pesos.filter((peso) => peso < 500).length;
}


function determinarStatus(variacao: number): string {
  return variacao > 20 ? "Lote com alta divergência" : "Lote padrão";
}


function analisarLotePacotes(): void {
  const pesos = gerarPesosPacotes(100);
  const maiorPeso = obterMaiorPeso(pesos);
  const menorPeso = obterMenorPeso(pesos);
  const variacao = calcularVariacao(maiorPeso, menorPeso);
  const pacotesAcima = contarPacotesAcima(pesos);
  const pacotesAbaixo = contarPacotesAbaixo(pesos);
  const status = determinarStatus(variacao);

  console.log("Análise do Lote de Pacotes de Bolachas:");
  console.log(`Maior Peso: ${maiorPeso}g`);
  console.log(`Menor Peso: ${menorPeso}g`);
  console.log(`Variação: ${variacao.toFixed(2)}%`);
  console.log(`Pacotes Acima do Padrão: ${pacotesAcima}`);
  console.log(`Pacotes Abaixo do Padrão: ${pacotesAbaixo}`);
  console.log(`Status do Lote: ${status}`);
}


async function main() {
  console.log("Iniciando análise de lotes de bolachas...");
  analisarLotePacotes();
  console.log("Análise concluída!");
}


(async () => {
  await main();
})();
