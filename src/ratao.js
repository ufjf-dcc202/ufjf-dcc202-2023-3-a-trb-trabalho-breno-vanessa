import {
  jogarDado,
  colocaDadoNaColuna,
  atualizaPontuacao,
} from "./funcoesPadroes.js";

let ratao, coluna;

ratao = {
  colunas: {
    col1: [],
    col2: [],
    col3: [],
  },
  pontuacoes: {
    pont1: [],
    pont2: [],
    pont3: [],
  },
  pontuacaoTotal: 0,
};

export function getRatao() {
  return ratao;
}

//export function setRatao()

// Função de escolher coluna aleatoriamente do Ratao
export function escolheColunaAleatoria() {
  coluna = Math.floor(Math.random() * 3) + 1;
  return coluna;
}
