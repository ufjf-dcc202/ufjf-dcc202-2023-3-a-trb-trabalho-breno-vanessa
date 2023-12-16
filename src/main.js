import {
  jogarDado,
  confereColunaAdversaria,
  atualizaPontuacao,
  colocaDadoNaColuna,
  acabouJogo,
  finalizaJogo,
} from "./funcoesPadroes.js";

import { getLamb, escolheColuna } from "./lamb.js";

import { getRatao, escolheColunaAleatoria } from "./ratao.js";

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
const col1R = document.querySelector("#col1R");
const col2R = document.querySelector("#col2R");
const col3R = document.querySelector("#col3R");

const sortR = document.querySelector("#sorteadorR");
const sortC = document.querySelector("#sorteadorC");

const ptR = document.querySelector("#pontuacaoR");
const ptC = document.querySelector("#pontuacaoC");

const mensage = document.querySelector("#inicio");

mensage.addEventListener("click", jogo);

let coluna;

function jogo() {
  console.log("Essa porra tá funcionando");
  mensage.innerHTML = "";
  // Esse loop roda enquanto o jogo não tiver acabado
  while (!acabouJogo()) {
    let dado = jogarDado(); // A cada nova jogada (cada rodada do loop), o dado é jogado

    // O if testa de quem é a vez
    if (vez == 0) {
      sortC.innerHTML = dado;
      coluna = escolheColuna();
      if (coluna == 1) {
        col1C.innerHTML += `<span> ${dado} </span>`;
      } else if (coluna == 2) {
        col2C.innerHTML += `<span> ${dado} </span>`;
      } else if (coluna == 3) {
        col3C.innerHTML += `<span> ${dado} </span>`;
      }
    } else {
      sortR.innerHTML = dado;
      coluna = escolheColunaAleatoria();
      let aux = colocaDadoNaColuna(coluna, dado, vez);
      coluna = aux;

      col1R.innerHTML = "";
      col2R.innerHTML = "";
      col3R.innerHTML = "";
      for (let i = 0; i < rato.colunas.col1.length; i++) {
        col1R.innerHTML += `<span> ${rato.colunas.col1[i]} </span>`;
      }
      for (let i = 0; i < rato.colunas.col2.length; i++) {
        col2R.innerHTML += `<span> ${rato.colunas.col2[i]} </span>`;
      }
      for (let i = 0; i < rato.colunas.col3.length; i++) {
        col3R.innerHTML += `<span> ${rato.colunas.col3[i]} </span>`;
      }
    }

    // Esse operador ternário muda o jogador
    vez == 1 ? (vez = 0) : (vez = 1);
  }
}
