import {
  jogarDado,
  confereColunaAdversaria,
  atualizaPontuacaoColuna,
  colocaDadoNaColuna,
  acabouJogo,
  finalizaJogo,
} from "./funcoesPadroes.js";

import { getLamb, atualizaColunaC, atualizaPontoColunaC } from "./lamb.js";

import { getRatao, escolheColunaAleatoria, atualizaColunaR } from "./ratao.js";

// const col10c = document.querySelector("#col10c")
// const col11c = document.querySelector("#col11c")
// const col12c = document.querySelector("#col12c")
// const col20c = document.querySelector("#col20c")
// const col21c = document.querySelector("#col21c")
// const col22c = document.querySelector("#col22c")
// const col30c = document.querySelector("#col30c")
// const col31c = document.querySelector("#col31c")
// const col32c = document.querySelector("#col32c")
// const col10r = document.querySelector("#col10r")
// const col11r = document.querySelector("#col11r")
// const col12r = document.querySelector("#col12r")
// const col20r = document.querySelector("#col20r")
// const col21r = document.querySelector("#col21r")
// const col22r = document.querySelector("#col22r")
// const col30r = document.querySelector("#col30r")
// const col31r = document.querySelector("#col31r")
// const col32r = document.querySelector("#col32r")

let cordeiro = getLamb();
let rato = getRatao();
let vez = 0; // 0 para Carneiro e 1 para Ratao

const col1C = document.querySelector("#col1C");
const col2C = document.querySelector("#col2C");
const col3C = document.querySelector("#col3C");

// const col1R = document.querySelector("#col1R");
// const col2R = document.querySelector("#col2R");
// const col3R = document.querySelector("#col3R");

const sortR = document.querySelector("#sorteadorR");
const sortC = document.querySelector("#sorteadorC");

const ptR = document.querySelector("#pontuacaoR");
const ptC = document.querySelector("#pontuacaoC");

export function atualizaPontuacaoGeral(){
  let caminho = cordeiro.pontuacoes
  cordeiro.pontuacaoTotal = caminho.col1 + caminho.col2 + caminho.col3
  ptC.innerHTML = cordeiro.pontuacaoTotal

  let caminhoR = rato.pontuacoes
  rato.pontuacaoTotal = caminhoR.col1 + caminhoR.col2 + caminhoR.col3
  ptR.innerHTML = rato.pontuacaoTotal
}

const mensage = document.querySelector("#inicio");

let dadoC, dadoR;
let coluna;

mensage.addEventListener("click", () => rolarDado(sortC));

function rolarDado(sorteador) {
  console.log("Essa porra tá funcionando");
  dadoC = jogarDado();
  sorteador.innerHTML = dadoC;
  mensage.remove();
}

col1C.addEventListener("click", () => jogador(1));
col2C.addEventListener("click", () => jogador(2));
col3C.addEventListener("click", () => jogador(3));

function jogador(coluna) {
  colocaDadoNaColuna(coluna, dadoC, 0);
  atualizaColunaC();
  atualizaPontuacaoColuna(coluna, 0);
  atualizaPontoColunaC(coluna);
  atualizaPontuacaoGeral();
}

function inimigo() {
  dadoR = jogarDado();
  colocaDadoNaColuna(coluna, dadoC, 1);
}

// jogar o dado
// colocar / escolher a coluna
// atualizar coluna
// atualiza pontuacao coluna e geral
// confere a coluna adversaria
  // vamos ter que fazer if pra ver qual coluna adversária avaliar
// muda jogador
