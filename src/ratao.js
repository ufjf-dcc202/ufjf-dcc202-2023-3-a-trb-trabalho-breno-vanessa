// cria as variáveis para guardar as informações do rato e da coluna
let ratao, coluna;

// cria o objeto ratao
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

// Seleciona as 3 colunas do rato vindas do html
const col1R = document.querySelector("#col1R");
const col2R = document.querySelector("#col2R");
const col3R = document.querySelector("#col3R");

// Seleciona os 3 espaços para colocarmos as pontuações referentes a cada coluna vindo do html
const pont1R = document.querySelector("#pont1R");
const pont2R = document.querySelector("#pont2R");
const pont3R = document.querySelector("#pont3R");

// Seleciona o espaço para colocarmos a pontuação final vindo do html
const ptR = document.querySelector("#pontuacaoR");

// Nessa função damos acesso direto ao objeto ratao à todos os arquivos que importarem essa função
export function getRatao() {
  // optamos por enviarmos o objeto e não um structuredClone para que a atualização do mesmo fosse mais fácil
  return ratao;
}

// Essa função tem como objetivo atualizar as colunas do rato (todas as colunas ao mesmo tempo)
export function atualizaColunaR() {
  // primeiro esvaziamos seu conteúdo
  col1R.innerHTML = "";
  col2R.innerHTML = "";
  col3R.innerHTML = "";

  // depois utilizamos um for para percorrer cada coluna dentro do objeto e inserir os valores no html
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

// Função de escolher coluna aleatoriamente e retornar a coluna escolhida
export function escolheColunaAleatoria() {
  coluna = Math.floor(Math.random() * 3) + 1;
  return coluna;
}

// Essa função coloca em cada espaço para pontuação vindo do html a pontuação das colunas
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

// Essa função atualiza a pontuação geral dentro do objeto e atualiza a pontuação no html
export function atualizaPontuacaoGeralR() {
  let caminho = ratao.pontuacoes;
  ratao.pontuacaoTotal = 0;
  if (caminho.pont1 !== 0) {
    ratao.pontuacaoTotal += caminho.pont1;
  }
  if (caminho.pont2 !== 0) {
    ratao.pontuacaoTotal += caminho.pont2;
  }
  if (caminho.pont3 !== 0) {
    ratao.pontuacaoTotal += caminho.pont3;
  }
  ptR.innerHTML = ratao.pontuacaoTotal;
}
