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
  carneiroJogar,
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
