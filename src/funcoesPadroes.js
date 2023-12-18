import { getLamb } from "./lamb.js";

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
export function atualizaPontuacaoColuna(col, vez) {
  let pontuacao = 0;

  let jogador;
  if (vez == 0) {
    jogador = lamb.colunas;
  } else {
    jogador = ratao.colunas;
  }
  //FIXME: verificar se não confunde coluna com pontuação e no final atualizar pontuação total
  switch (col) {
    case 1:
      for (let i = 0; i < jogador.col1.length; i++) {
        let vezes = auxAtualizaPontuacaoColuna(jogador.col1[i], jogador.col1);
        pontuacao += jogador.col1[i] * vezes;
      }
      if (vez == 0) {
        lamb.pontuacoes.pont1 = pontuacao;
      } else {
        ratao.pontuacoes.pont1 = pontuacao;
      }
      break;
    case 2:
      for (let i = 0; i < jogador.col2.length; i++) {
        let vezes = auxAtualizaPontuacaoColuna(jogador.col2[i], jogador.col2);
        pontuacao += jogador.col2[i] * vezes;
      }
      if (vez == 0) {
        lamb.pontuacoes.pont2 = pontuacao;
      } else {
        ratao.pontuacoes.pont2 = pontuacao;
      }
      break;
    case 3:
      for (let i = 0; i < jogador.col3.length; i++) {
        let vezes = auxAtualizaPontuacaoColuna(jogador.col3[i], jogador.col3);
        pontuacao += jogador.col3[i] * vezes;
      }
      if (vez == 0) {
        lamb.pontuacoes.pont3 = pontuacao;
      } else {
        ratao.pontuacoes.pont3 = pontuacao;
      }
      break;
  }
  // lamb.pontuacaoTotal = lamb.pontuacoes.pont1 + lamb.pontuacoes.pont2 + lamb.pontuacoes.pont3;
}

function auxAtualizaPontuacaoColuna(valor, coluna) {
  let cont = 0;
  for (let i = 0; i < coluna.length; i++) {
    if (coluna[i] == valor) {
      cont++;
    }
  }
  return cont;
}

// Função de testar se podemos colocar na coluna
export function colocaDadoNaColuna(coluna, dado, jogador) {
  if (jogador == 0) {
    if (coluna == 1 && lamb.colunas.col1.length < 3) {
      lamb.colunas.col1.push(dado);
      return true;
    } else if (coluna == 2 && lamb.colunas.col2.length < 3) {
      lamb.colunas.col2.push(dado);
      return true;
    } else if (coluna == 3 && lamb.colunas.col3.length < 3) {
      lamb.colunas.col3.push(dado);
      return true;
    } else {
      return false;
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
