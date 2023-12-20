// primeiro importamos todas as funções necessárias para o jogo
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

// utilizamos as funções get para trazermos os objetos do carneiro e do rato
let carneiro = getLamb();
let rato = getRatao();

// criamos uma variável para sabermos se o jogo começou (botão começar não foi clicado)
let jogocomecou = false;

// Seleciona as 3 colunas do carneiro vindas do html
const col1C = document.querySelector("#col1C");
const col2C = document.querySelector("#col2C");
const col3C = document.querySelector("#col3C");

// Seleciona os sorteadores (espaços onde os resultados dos dados irão aparecer) vindos do html
const sortR = document.querySelector("#sorteadorR");
const sortC = document.querySelector("#sorteadorC");

// Seleciona os espaços onde aparecerão a mensagem inicial(botão de começar) e a mensagem final (quem ganhou) do html
const mensagemInicio = document.querySelector("#inicio");
const mensagemFinal = document.querySelector("#resultado");

// cria as variáveis para guardar os dados e a coluna
let dadoC, dadoR, coluna;

// cria um event para o botão de começar que roda a nossa função rolarDado
mensagemInicio.addEventListener("click", () => rolarDado(sortC));

// essa função é o gatilho para o jogo começar.
function rolarDado(sorteador) {
  // ela diz que o jogo começou
  jogocomecou = true;
  // joga o dado para o carneiro e adiciona esse valor no sorteador do html
  dadoC = jogarDado();
  sorteador.innerHTML = dadoC;
  // e remove o botão de começar
  mensagemInicio.remove();
}

// Depois criamos eventos para cada coluna do carneiro, já que o usuário precisa clicar na coluna para de fato fazer a jogada.
// Assim que uma das colunas é clicada, a função carneiroJogar é chamada e recebe por parâmetro qual a coluna clicada
col1C.addEventListener("click", () => carneiroJogar(1));
col2C.addEventListener("click", () => carneiroJogar(2));
col3C.addEventListener("click", () => carneiroJogar(3));

// Dentro dessa função está todo o esquema de jogo do carneiro
function carneiroJogar(coluna) {
  // primeiro fazemos um teste para saber se o botão começar realmente foi clicado, caso não, saímos da função sem fazer nada
  if (!jogocomecou) return;

  // após clicar em uma coluna, para evitar clique-duplo, desabilitamos o clique na coluna (ela fica ligeiramente cinza)
  col1C.disabled = true;
  col2C.disabled = true;
  col3C.disabled = true;

  // Aqui vamos testar se a coluna escolhida não é válida (para isso analizamos o retorno da função colocaDadoNaColuna)
  if (!colocaDadoNaColuna(coluna, dadoC, 0)) {
    // Se ela de fato não for válida, escrevemos uma mensagem pro usuário no espaço para a mensagem final
    mensagemFinal.innerHTML =
      "Você não pode escolher essa coluna, escolha outra.";
    // e habilitamos novamente o clique nas colunas
    col1C.disabled = false;
    col2C.disabled = false;
    col3C.disabled = false;
  } else {
    // caso a coluna seja válida, nós esvaziamos o conteúdo da tag de id mensagemFinal do html e prosseguimos
    mensagemFinal.innerHTML = "";
    // atualizamos a coluna do carneiro
    atualizaColunaC();
    // e então atualizamos a pontuação da coluna
    atualizaPontuacaoColuna(coluna, 0);
    // mostramos essa pontuação na tela
    mostraPontoColunaC(coluna);
    // e atualizamos a pontuação geral do carneiro
    atualizaPontuacaoGeralC();

    // utilizamos de um setTimeout para o jogo não ir tão rápido
    setTimeout(function () {
      // agora vamos conferir se o jogador adversário perdeu algum dado chamando a função confereColunaAdversaria
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
      // Depois disso fazemos todas as atualizações necessárias para o rato, atualizando a coluna e todas as pontuações
      atualizaColunaR();
      atualizaPontuacaoColuna(coluna, 1);
      mostraPontoColunaR(coluna);
      atualizaPontuacaoGeralR();
    }, 1000);

    // depois da jogada do carneiro testamos se o jogo acabou
    if (acabouJogo()) {
      // se sim, chamamos a função finalizar jogo
      finalizaJogo();
    } else {
      // se não, chamamos a função ratoJogar para que ele faça sua jogada
      ratoJogar();
    }
  }
}

// Dentro dessa função está todo o esquema de jogo do rato
function ratoJogar() {
  // jogamos o dado pro rato e mostramos ele no sorteador
  dadoR = jogarDado();
  sortR.innerHTML = dadoR;

  // usamos o setTimeout para o jogo ter pausas
  setTimeout(function () {
    // fazemos o rato escolher sua coluna e colocamos o dado sorteado na coluna sorteada
    coluna = escolheColunaAleatoria();
    coluna = colocaDadoNaColuna(coluna, dadoR, 1);
    // atualizamos a coluna no html
    atualizaColunaR();
    // Atualizamos a pontuação da coluna e a mostramos no html
    atualizaPontuacaoColuna(coluna, 1);
    mostraPontoColunaR(coluna);
    // Atualizamos a pontuação geral
    atualizaPontuacaoGeralR();

    // usamos o setTimeout para o jogo ter pausas
    setTimeout(function () {
      // agora vamos conferir se o jogador adversário perdeu algum dado chamando a função confereColunaAdversaria
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
      // Depois disso fazemos todas as atulizações necessárias para o carneiro, atualizando a coluna e todas as pontuações
      atualizaColunaC();
      atualizaPontuacaoColuna(coluna, 0);
      mostraPontoColunaC(coluna);
      atualizaPontuacaoGeralC();
    }, 1000);

    // no fim, caso o jogo tenha terminado, chamamos a função finalizar jogo
    if (acabouJogo()) {
      finalizaJogo();
    } else {
      // caso não tenha terminado, jogamos o dado para o cordeiro e habilitamos novamente o clique nas colunas
      dadoC = jogarDado();
      sortC.innerHTML = dadoC;
      col1C.disabled = false;
      col2C.disabled = false;
      col3C.disabled = false;
    }
  }, 1000);
}

// essa função é chamada caso o jogo tenha terminado e finaliza a possibilidade de continuação pós término
export function finalizaJogo() {
  // desabilita o clique em todas as colunas do carneiro
  col1C.disabled = true;
  col2C.disabled = true;
  col3C.disabled = true;

  // Esvazia o espaço onde antes apareciam os "dados"
  sortC.innerHTML = "";
  sortR.innerHTML = "";

  // cria uma variável para guardar o resultado, ou seja, a mensagem que aparecerá na tela
  let resultado;

  // Faz um if para testar se foi o carneiro que ganhou, se foi o rato ou se houve um empate
  if (rato.pontuacaoTotal > carneiro.pontuacaoTotal) {
    resultado = "O Rato venceu!";
  } else if (rato.pontuacaoTotal < carneiro.pontuacaoTotal) {
    resultado = "O Carneiro venceu!";
  } else {
    resultado = "Houve um empate";
  }

  // no fim, adiciona o resultado na tag mensagemFinal, mostrando o resultado na tela
  mensagemFinal.innerHTML = resultado;
}