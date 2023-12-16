import { escolheColuna, getLamb } from "./lamb.js";

import { escolheColunaAleatoria, getRatao } from "./ratao.js";

let lamb = getLamb();
let ratao = getRatao();

// Função para jogar o dado (escolhe aleatoriamente de 1 a 6)
export function jogarDado() {
  let dado = Math.floor(Math.random() * 6) + 1;
  return dado;
}

// função que vê se o adversário tem algum dado igual na mesma coluna
export function confereColunaAdversaria(dado, colAdversaria) {
  for (let i = 0; i < colAdversaria.length; i++) {
    if (colAdversaria[i] == dado) {
      colAdversaria.splice(i, 1);
    }
  }

  return colAdversaria;
}

//função para calcular a pontuação de cada coluna
export function atualizaPontuacao(col) {
  pont = 0;

  for (let i = 0; i < col.length; i++) {
    pont += col[i];
  }

  return pont;
}

// Função de testar se podemos colocar na coluna
export function colocaDadoNaColuna(coluna, dado, jogador) {
  if (jogador == 0) {
    if (coluna == 1 && lamb.colunas.col1.length < 3) {
      lamb.colunas.col1.push(dado);
    } else if (coluna == 2 && lamb.colunas.col2.length < 3) {
      lamb.colunas.col2.push(dado);
    } else if (coluna == 3 && lamb.colunas.col3.length < 3) {
      lamb.colunas.col3.push(dado);
    } else {
      escolheColuna();
      colocaDadoNaColuna(coluna, dado, jogador);
    }
  } else {
    if (coluna == 1 && ratao.colunas.col1.length < 3) {
      ratao.colunas.col1.push(dado);
    } else if (coluna == 2 && ratao.colunas.col2.length < 3) {
      ratao.colunas.col2.push(dado);
    } else if (coluna == 3 && ratao.colunas.col3.length < 3) {
      ratao.colunas.col3.push(dado);
    } else {
      coluna = escolheColunaAleatoria();
      colocaDadoNaColuna(coluna, dado, jogador);
    }
    return coluna;
  }
}

// função que diz se o jogo acabou
export function acabouJogo() {
  if (
    (lamb.colunas.col1.length == 3 &&
      lamb.colunas.col2.length == 3 &&
      lamb.colunas.col3.length == 3) ||
    (ratao.colunas.col1.length == 3 &&
      ratao.colunas.col2.length == 3 &&
      ratao.colunas.col3.length == 3)
  ) {
    return true;
  } else {
    return false;
  }
}

// função que de fato termina o jogo
export function finalizaJogo(ganhador) {}
