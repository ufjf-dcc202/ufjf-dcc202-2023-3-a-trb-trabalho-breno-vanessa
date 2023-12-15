import { escolheColuna } from "./lamb.js";

import { escolheColunaAleatoria } from "./ratao.js";

// Criando um objeto para representar o Ratao
let ratao = {
  colunas: {
    col1: [],
    col2: [],
    col3: [],
  },
  pontuacoes: {
    pont1: [],
    pont2: [],
    pont3: [],
  },
  pontuacaoTotal: 0,
};
// Criando um objeto para representar o Carneiro
let lamb = {
  colunas: {
    col1: [],
    col2: [],
    col3: [],
  },
  pontuacoes: {
    pont1: [],
    pont2: [],
    pont3: [],
  },
  pontuacaoTotal: 0,
};

// Criando os gets do ratao e do cordeiro
export function getRatao() {
  return structuredClone(ratao);
}
export function getLamb() {
  return structuredClone(lamb);
}

// Função para jogar o dado (escolhe aleatoriamente de 1 a 6)
export function jogarDado() {
  dado = Math.floor(Math.random() * 6) + 1;
  return dado;
}

// função que vê se o adversário tem algum dado igual na mesma coluna
export function confereColunaAdversaria(dado, colAdversaria) {
  for (let i = 0; i < colAdversaria.length; i++) {
    if (colAdversaria[i] == dado) {
      colAdversaria.splice(i, 1);
    }
  }

  return colAdversaria;
}

//função para calcular a pontuação de cada coluna
export function atualizaPontuacaoColunas(col) {
  pont = 0;

  for (let i = 0; i < col.length; i++) {
    pont += col[i];
  }

  return pont;
}

// Função de testar se podemos colocar na coluna
export function colocaDadoNaColuna(coluna, dado, jogador) {
  if (jogador == 0) {
    if (coluna == 1 && lamb.col1.length < 3) {
      lamb.col1.push(dado);
    } else if (coluna == 2 && lamb.col2.length < 3) {
      lamb.col2.push(dado);
    } else if (coluna == 3 && lamb.col3.length < 3) {
      lamb.col3.push(dado);
    } else {
      escolheColuna();
      colocaDadoNaColuna(coluna, dado, jogador);
    }
  } else {
    if (coluna == 1 && ratao.col1.length < 3) {
      ratao.col1.push(dado);
    } else if (coluna == 2 && ratao.col2.length < 3) {
      ratao.col2.push(dado);
    } else if (coluna == 3 && ratao.col3.length < 3) {
      ratao.col3.push(dado);
    } else {
      coluna = escolherColunaAleatoria();
      colocaDadoNaColuna(coluna, dado, jogador);
    }
  }
}

// função que diz se o jogo acabou
export function acabouJogo() {
  if (
    (lamb.col1.length == 3 && lamb.col2.length == 3 && lamb.col3.length == 3) ||
    (ratao.col1.length == 3 && ratao.col2.length == 3 && ratao.col3.length == 3)
  ) {
    return true;
  } else {
    return false;
  }
}

// função que de fato termina o jogo
finalizaJogo(ganhador);
