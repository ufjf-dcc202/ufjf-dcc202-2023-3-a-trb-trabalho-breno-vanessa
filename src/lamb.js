import {
  jogarDado,
  colocaDadoNaColuna,
  atualizaPontuacao,
} from "./funcoesPadroes.js";

let lamb = {
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

export function getLamb() {
  return structuredClone(lamb);
}

export function escolheColuna(dado, col) {}
