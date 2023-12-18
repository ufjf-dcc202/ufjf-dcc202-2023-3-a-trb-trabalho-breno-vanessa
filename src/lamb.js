
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
