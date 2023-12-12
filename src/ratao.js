import { getRatao, jogarDado, colocaDadoNaColuna, atualizaPontuacao } from "./funcoesPadroes"

let dado, coluna, pontuacao

// Função de escolher coluna aleatoriamente do Ratao
export function escolherColunaAleatoria(){
    coluna = Math.floor(Math.random() * 3) + 1
    return coluna
}