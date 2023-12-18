import {
  jogarDado,
  confereColunaAdversaria,
  atualizaPontuacaoColuna,
  colocaDadoNaColuna,
  acabouJogo,
  finalizaJogo,
} from "./funcoesPadroes.js";

import {
  getLamb,
  atualizaColunaC,
  mostraPontoColunaC,
  atualizaPontuacaoGeralC,
} from "./lamb.js";

import {
  getRatao,
  escolheColunaAleatoria,
  atualizaColunaR,
  atualizaPontuacaoGeralR,
  mostraPontoColunaR,
} from "./ratao.js";

let cordeiro = getLamb();
let rato = getRatao();
// let vez = 0; // 0 para Carneiro e 1 para Ratao
let jogocomecou = false;

const col1C = document.querySelector("#col1C");
const col2C = document.querySelector("#col2C");
const col3C = document.querySelector("#col3C");

// const col1R = document.querySelector("#col1R");
// const col2R = document.querySelector("#col2R");
// const col3R = document.querySelector("#col3R");

const sortR = document.querySelector("#sorteadorR");
const sortC = document.querySelector("#sorteadorC");

const mensage = document.querySelector("#inicio");

let dadoC, dadoR;
let coluna;

mensage.addEventListener("click", () => rolarDado(sortC));

function rolarDado(sorteador) {
  jogocomecou = true;
  console.log("Essa porra tá funcionando");
  dadoC = jogarDado();
  sorteador.innerHTML = dadoC;
  mensage.remove();
}

col1C.addEventListener("click", () => jogador(1));
col2C.addEventListener("click", () => jogador(2));
col3C.addEventListener("click", () => jogador(3));

function jogador(coluna) {
  if (!jogocomecou) return;
  // Fazer a jogada do carneiro
  colocaDadoNaColuna(coluna, dadoC, 0);
  atualizaColunaC();
  atualizaPontuacaoColuna(coluna, 0);
  mostraPontoColunaC(coluna);
  atualizaPontuacaoGeralC();

  // Conferir e atualizar o tabuleiro do Rato
  switch (coluna) {
    case 1:
      confereColunaAdversaria(dadoC, rato.colunas.col1);
      break;
    case 2:
      confereColunaAdversaria(dadoC, rato.colunas.col2);
      break;
    case 3:
      confereColunaAdversaria(dadoC, rato.colunas.col3);
      break;
  }
  mostraPontoColunaR(coluna);
  atualizaPontuacaoGeralR();

  // Chama a jogada do Rato
  inimigo();
}

function inimigo() {
  dadoR = jogarDado();
  sortR.innerHTML = dadoR;
  colocaDadoNaColuna(coluna, dadoC, 1);
  //FIXME:atualizar o tabuleiro do inimigo
  dadoC = jogarDado();
  sortC.innerHTML = dadoC;
}

// jogar o dado
// colocar / escolher a coluna
// atualizar coluna
// atualiza pontuacao coluna e geral
// confere a coluna adversaria
// vamos ter que fazer if pra ver qual coluna adversária avaliar
// muda jogador
