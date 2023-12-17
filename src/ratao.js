
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

export function atualizaPontoColunaR(coluna) {
  switch (coluna) {
    case 1:
      pont1R.innerHTML = ratao.pontuacoes.col1;
      break;
    case 2:
      pont2R.innerHTML = ratao.pontuacoes.col2;
      break;
    case 3:
      pont3R.innerHTML = ratao.pontuacoes.col3;
      break;
  }
}
