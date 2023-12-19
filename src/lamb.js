let lamb = {
  colunas: {
    col1: [],
    col2: [],
    col3: [],
  },
  pontuacoes: {
    pont1: 0,
    pont2: 0,
    pont3: 0,
  },
  pontuacaoTotal: 0,
};

const col1C = document.querySelector("#col1C");
const col2C = document.querySelector("#col2C");
const col3C = document.querySelector("#col3C");

const pont1C = document.querySelector("#pont1C");
const pont2C = document.querySelector("#pont2C");
const pont3C = document.querySelector("#pont3C");

const ptC = document.querySelector("#pontuacaoC");

export function carneiroJogar(coluna) {
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


export function getLamb() {
  return lamb;
}

export function atualizaColunaC() {
  col1C.innerHTML = "";
  col2C.innerHTML = "";
  col3C.innerHTML = "";
  for (let i = 0; i < lamb.colunas.col1.length; i++) {
    col1C.innerHTML += `<span> ${lamb.colunas.col1[i]} </span>`;
  }
  for (let i = 0; i < lamb.colunas.col2.length; i++) {
    col2C.innerHTML += `<span> ${lamb.colunas.col2[i]} </span>`;
  }
  for (let i = 0; i < lamb.colunas.col3.length; i++) {
    col3C.innerHTML += `<span> ${lamb.colunas.col3[i]} </span>`;
  }
}

export function mostraPontoColunaC(coluna) {
  switch (coluna) {
    case 1:
      pont1C.innerHTML = lamb.pontuacoes.pont1;
      break;
    case 2:
      pont2C.innerHTML = lamb.pontuacoes.pont2;
      break;
    case 3:
      pont3C.innerHTML = lamb.pontuacoes.pont3;
      break;
  }
}

export function atualizaPontuacaoGeralC() {
  let caminho = lamb.pontuacoes;
  lamb.pontuacaoTotal = 0;
  if (caminho.pont1 != 0) {
    lamb.pontuacaoTotal += caminho.pont1;
  }
  if (caminho.pont2 != 0) {
    lamb.pontuacaoTotal += caminho.pont2;
  }
  if (caminho.pont3 != 0) {
    lamb.pontuacaoTotal += caminho.pont3;
  }
  ptC.innerHTML = lamb.pontuacaoTotal;
}
