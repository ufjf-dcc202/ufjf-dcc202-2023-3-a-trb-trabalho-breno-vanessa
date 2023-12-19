let ratao, coluna;

ratao = {
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

const col1R = document.querySelector("#col1R");
const col2R = document.querySelector("#col2R");
const col3R = document.querySelector("#col3R");

const pont1R = document.querySelector("#pont1R");
const pont2R = document.querySelector("#pont2R");
const pont3R = document.querySelector("#pont3R");

const ptR = document.querySelector("#pontuacaoR");

export function ratoJogar() {
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

export function getRatao() {
  return ratao;
}

export function atualizaColunaR() {
  col1R.innerHTML = "";
  col2R.innerHTML = "";
  col3R.innerHTML = "";
  for (let i = 0; i < ratao.colunas.col1.length; i++) {
    col1R.innerHTML += `<span> ${ratao.colunas.col1[i]} </span>`;
  }
  for (let i = 0; i < ratao.colunas.col2.length; i++) {
    col2R.innerHTML += `<span> ${ratao.colunas.col2[i]} </span>`;
  }
  for (let i = 0; i < ratao.colunas.col3.length; i++) {
    col3R.innerHTML += `<span> ${ratao.colunas.col3[i]} </span>`;
  }
}

// Função de escolher coluna aleatoriamente do Ratao
export function escolheColunaAleatoria() {
  coluna = Math.floor(Math.random() * 3) + 1;
  return coluna;
}

export function mostraPontoColunaR(coluna) {
  switch (coluna) {
    case 1:
      pont1R.innerHTML = ratao.pontuacoes.pont1;
      break;
    case 2:
      pont2R.innerHTML = ratao.pontuacoes.pont2;
      break;
    case 3:
      pont3R.innerHTML = ratao.pontuacoes.pont3;
      break;
  }
}

export function atualizaPontuacaoGeralR() {
  let caminho = ratao.pontuacoes;
  ratao.pontuacaoTotal = 0;
  if (caminho.pont1 != 0) {
    ratao.pontuacaoTotal += caminho.pont1;
  }
  if (caminho.pont2 != 0) {
    ratao.pontuacaoTotal += caminho.pont2;
  }
  if (caminho.pont3 != 0) {
    ratao.pontuacaoTotal += caminho.pont3;
  }
  ptR.innerHTML = ratao.pontuacaoTotal;
}
