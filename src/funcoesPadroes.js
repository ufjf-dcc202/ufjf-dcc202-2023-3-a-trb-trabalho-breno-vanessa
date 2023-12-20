// primeiro importamos as funções que serão necessárias neste arquivo
import { getLamb } from "./lamb.js";
import { escolheColunaAleatoria, getRatao } from "./ratao.js";

// aqui recebemos os objetos lamb e ratao
let lamb = getLamb();
let ratao = getRatao();

// Função para jogar o dado (escolhe aleatoriamente de 1 a 6 e retorna o dado)
export function jogarDado() {
  let dado = Math.floor(Math.random() * 6) + 1;
  return dado;
}

// Função de testar se podemos colocar na coluna.
// Usa o parâmetro coluna para saber qual coluna foi escolhida e o parâmetro jogador para saber em qual tabuleiro colocar
export function colocaDadoNaColuna(coluna, dado, jogador) {
  if (jogador === 0) {
    if(lamb.colunas["col"+coluna].length < 3){
      lamb.colunas["col"+coluna].push(dado);
      return true
    } else {
      return false
    }
  } else {
    // para o rato, ele usa o conceito de recursividade (uma função chamar a ela mesma) para que se escolha outra coluna
    if(ratao.colunas["col"+coluna].length < 3){
      ratao.colunas["col"+coluna].push(dado);
    } else {
      coluna = escolheColunaAleatoria();
      colocaDadoNaColuna(coluna, dado, jogador);
    }
    return coluna;
  }
}

//função para calcular a pontuação de cada coluna
export function atualizaPontuacaoColuna(col, vez) {
  let pontuacao = 0;

  // testamos quem é o jogador
  let jogador;
  if (vez === 0) {
    jogador = lamb.colunas;
  } else {
    jogador = ratao.colunas;
  }

  // conferimos com qual coluna estamos lidando
  switch (col) {
    case 1:
      // usamos um for para percorrer a coluna
      for (let i = 0; i < jogador.col1.length; i++) {
        // com a função auxiliar, conferimos quantas vezes cada valor aparece na coluna para calcularmos certo
        let vezes = auxAtualizaPontuacaoColuna(jogador.col1[i], jogador.col1);
        pontuacao += jogador.col1[i] * vezes;
      }
      if (vez === 0) {
        lamb.pontuacoes.pont1 = pontuacao;
      } else {
        ratao.pontuacoes.pont1 = pontuacao;
      }
      break;
    case 2:
      for (let i = 0; i < jogador.col2.length; i++) {
        let vezes = auxAtualizaPontuacaoColuna(jogador.col2[i], jogador.col2);
        pontuacao += jogador.col2[i] * vezes;
      }
      if (vez === 0) {
        lamb.pontuacoes.pont2 = pontuacao;
      } else {
        ratao.pontuacoes.pont2 = pontuacao;
      }
      break;
    case 3:
      for (let i = 0; i < jogador.col3.length; i++) {
        let vezes = auxAtualizaPontuacaoColuna(jogador.col3[i], jogador.col3);
        pontuacao += jogador.col3[i] * vezes;
      }
      if (vez === 0) {
        lamb.pontuacoes.pont3 = pontuacao;
      } else {
        ratao.pontuacoes.pont3 = pontuacao;
      }
      break;
  }
}

function auxAtualizaPontuacaoColuna(valor, coluna) {
  let cont = 0;
  for (let i = 0; i < coluna.length; i++) {
    if (coluna[i] === valor) {
      cont++;
    }
  }
  return cont;
}

// função que vê se o adversário tem algum dado igual na mesma coluna e retira esse dado da coluna adversária
export function confereColunaAdversaria(dado, colAdversaria) {
  for (let i = colAdversaria.length; i > -1; i--) {
    if (colAdversaria[i] === dado) {
      colAdversaria.splice(i, 1);
    }
  }
}

// função que diz se o jogo acabou, ou seja, se todas as colunas de pelo menos um dos jogadores está completa
export function acabouJogo() {
  if (
    (lamb.colunas.col1.length === 3 &&
      lamb.colunas.col2.length === 3 &&
      lamb.colunas.col3.length === 3) ||
    (ratao.colunas.col1.length === 3 &&
      ratao.colunas.col2.length === 3 &&
      ratao.colunas.col3.length === 3)
  ) {
    return true;
  } else {
    return false;
  }
}