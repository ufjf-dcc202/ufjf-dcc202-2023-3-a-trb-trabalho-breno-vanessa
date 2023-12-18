import {
  jogarDado,
  confereColunaAdversaria,
  atualizaPontuacaoColuna,
  colocaDadoNaColuna,
  acabouJogo,
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

const mensagemInicio = document.querySelector("#inicio");

const mensagemFinal = document.querySelector("#resultado");

let dadoC, dadoR;
let coluna;

mensagemInicio.addEventListener("click", () => rolarDado(sortC));

function rolarDado(sorteador) {
  jogocomecou = true;
  console.log("Essa porra tá funcionando");
  dadoC = jogarDado();
  sorteador.innerHTML = dadoC;
  mensagemInicio.remove();
}

col1C.addEventListener("click", () => jogador(1));
col2C.addEventListener("click", () => jogador(2));
col3C.addEventListener("click", () => jogador(3));

function jogador(coluna) {
  if (!jogocomecou) return;
  col1C.disabled = true;
  col2C.disabled = true;
  col3C.disabled = true;
  // Fazer a jogada do carneiro
  colocaDadoNaColuna(coluna, dadoC, 0);
  atualizaColunaC();
  atualizaPontuacaoColuna(coluna, 0);
  mostraPontoColunaC(coluna);
  atualizaPontuacaoGeralC();

  setTimeout(function () {
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
    atualizaColunaR();
    atualizaPontuacaoColuna(coluna, 1);
    mostraPontoColunaR(coluna);
    atualizaPontuacaoGeralR();
  }, 1000);

  if (acabouJogo()) {
    finalizaJogo();
  } else {
    // Chama a jogada do Rato
    inimigo();
  }
}

function inimigo() {
  dadoR = jogarDado();
  sortR.innerHTML = dadoR;
  setTimeout(function () {
    // Faz a jogada do rato
    coluna = escolheColunaAleatoria();
    colocaDadoNaColuna(coluna, dadoR, 1);
    atualizaColunaR();
    atualizaPontuacaoColuna(coluna, 1);
    mostraPontoColunaR(coluna);
    atualizaPontuacaoGeralR();

    setTimeout(function () {
      // Conferir e atualizar o tabuleiro do Rato
      switch (coluna) {
        case 1:
          confereColunaAdversaria(dadoR, cordeiro.colunas.col1);
          break;
        case 2:
          confereColunaAdversaria(dadoR, cordeiro.colunas.col2);
          break;
        case 3:
          confereColunaAdversaria(dadoR, cordeiro.colunas.col3);
          break;
      }
      atualizaColunaC();
      atualizaPontuacaoColuna(coluna, 0);
      mostraPontoColunaC(coluna);
      atualizaPontuacaoGeralC();
    }, 1000);

    if (acabouJogo()) {
      finalizaJogo();
    }

    // joga o dado do cordeiro
    dadoC = jogarDado();
    sortC.innerHTML = dadoC;
    col1C.disabled = false;
    col2C.disabled = false;
    col3C.disabled = false;
  }, 1000);
}

// jogar o dado
// colocar / escolher a coluna
// atualizar coluna
// atualiza pontuacao coluna e geral
// confere a coluna adversaria
// vamos ter que fazer if pra ver qual coluna adversária avaliar
// muda jogador

// função que de fato termina o jogo
export function finalizaJogo() {
  col1C.disabled = true;
  col2C.disabled = true;
  col3C.disabled = true;
  sortC.innerHTML = "";
  sortR.innerHTML = "";

  let resultado;
  if (rato.pontuacaoTotal > cordeiro.pontuacaoTotal) {
    resultado = "O Rato venceu!";
  } else if (rato.pontuacaoTotal < cordeiro.pontuacaoTotal) {
    resultado = "O Cordeiro venceu!";
  } else {
    resultado = "Houve um empate";
  }

  mensagemFinal.innerHTML = resultado;
}
