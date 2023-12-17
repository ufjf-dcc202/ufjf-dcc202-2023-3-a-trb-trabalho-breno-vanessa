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

let cordeiro = getLamb();
let rato = getRatao();
let vez = 0; // 0 para Carneiro e 1 para Ratao
let jogocomecou = false;

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
  cordeiro.pontuacaoTotal = caminho.pont1 + caminho.pont2 + caminho.pont3
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
  colocaDadoNaColuna(coluna, dadoC, 0);
  atualizaColunaC();
  atualizaPontuacaoColuna(coluna, 0);
  atualizaPontoColunaC(coluna);
  atualizaPontuacaoGeral();
  inimigo();
}

function inimigo() {
  dadoR = jogarDado();
  colocaDadoNaColuna(coluna, dadoC, 1);
  //FIXME:atualizar o tabuleiro do inimigo
}

// jogar o dado
// colocar / escolher a coluna
// atualizar coluna
// atualiza pontuacao coluna e geral
// confere a coluna adversaria
  // vamos ter que fazer if pra ver qual coluna adversária avaliar
// muda jogador
