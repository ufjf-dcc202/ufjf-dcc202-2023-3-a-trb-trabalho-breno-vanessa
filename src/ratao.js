import {
  getRatao,
  jogarDado,
  colocaDadoNaColuna,
  atualizaPontuacao,
} from "./funcoesPadroes";

let ratao, coluna;

ratao = getRatao();

// Função de escolher coluna aleatoriamente do Ratao
export function escolheColunaAleatoria() {
  coluna = Math.floor(Math.random() * 3) + 1;
  return coluna;
}
