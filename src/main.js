// falta adicionar comentários
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

let carneiro = getLamb();
let rato = getRatao();
let jogocomecou = false;

const col1C = document.querySelector("#col1C");
const col2C = document.querySelector("#col2C");
const col3C = document.querySelector("#col3C");

const sortR = document.querySelector("#sorteadorR");
const sortC = document.querySelector("#sorteadorC");

const mensagemInicio = document.querySelector("#inicio");

const mensagemFinal = document.querySelector("#resultado");

let dadoC, dadoR;
let coluna;

mensagemInicio.addEventListener("click", () => rolarDado(sortC));

function rolarDado(sorteador) {
  jogocomecou = true;
  dadoC = jogarDado();
  sorteador.innerHTML = dadoC;
  mensagemInicio.remove();
}

col1C.addEventListener("click", () => carneiroJogar(1));
col2C.addEventListener("click", () => carneiroJogar(2));
col3C.addEventListener("click", () => carneiroJogar(3));

function carneiroJogar(coluna) {
  if (!jogocomecou) return;
  col1C.disabled = true;
  col2C.disabled = true;
  col3C.disabled = true;
  // Fazer a jogada do carneiro
  if (!colocaDadoNaColuna(coluna, dadoC, 0)) {
    mensagemFinal.innerHTML =
      "Você não pode escolher essa coluna, escolha outra.";
    col1C.disabled = false;
    col2C.disabled = false;
    col3C.disabled = false;
  } else {
    mensagemFinal.innerHTML = ""
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
      ratoJogar();
    }
  }
}

function ratoJogar() {
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
          confereColunaAdversaria(dadoR, carneiro.colunas.col1);
          break;
        case 2:
          confereColunaAdversaria(dadoR, carneiro.colunas.col2);
          break;
        case 3:
          confereColunaAdversaria(dadoR, carneiro.colunas.col3);
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

    // joga o dado do carneiro
    dadoC = jogarDado();
    sortC.innerHTML = dadoC;
    col1C.disabled = false;
    col2C.disabled = false;
    col3C.disabled = false;
  }, 1000);
}

// função que de fato termina o jogo
export function finalizaJogo() {
  col1C.disabled = true;
  col2C.disabled = true;
  col3C.disabled = true;
  sortC.innerHTML = "";
  sortR.innerHTML = "";

  let resultado;
  if (rato.pontuacaoTotal > carneiro.pontuacaoTotal) {
    resultado = "O Rato venceu!";
  } else if (rato.pontuacaoTotal < carneiro.pontuacaoTotal) {
    resultado = "O Carneiro venceu!";
  } else {
    resultado = "Houve um empate";
  }

  mensagemFinal.innerHTML = resultado;
}
