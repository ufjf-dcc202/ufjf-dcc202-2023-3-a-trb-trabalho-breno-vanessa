// Criando um objeto para representar o Ratao
let ratao = {
    col1: [], 
    col2: [], 
    col3: []
} 
// Criando um objeto para representar o Carneiro
let lamb = {
    col1: [], 
    col2: [], 
    col3: []
}

// Criando os gets do ratao e do cordeiro
export function getRatao(){
    return structuredClone(ratao)
}
export function getLamb(){
    return structuredClone(lamb)
}

export function jogarDado(){
    dado = Math.floor(Math.random() * 6) + 1
    return dado;
}

// Função de escolher coluna aleatoriamente do Ratao
export function escolherColunaAleatoria(){
    coluna = Math.floor(Math.random() * 3) + 1
    return coluna
}

// função que vê se o adversário tem algum dado igual na mesma coluna
export function confereColunaAdversaria(dado, colAdversaria){
    for(let i = 0; i < colAdversaria.length; i++){
        if(colAdversaria[i] == dado){
            colAdversaria.splice(i, 1)
        }
    }

    return colAdversaria
}

// Função de testar se podemos colocar na coluna
export function colocaDadoNaColuna(coluna, dado){
    if(! acabouJogo()){
        if(coluna == 1 && ratao.col1.length < 3){
            col1.push(dado)
        } else if(coluna == 2 && ratao.col2.length < 3){
            col2.push(dado)
        } else if(coluna == 3 && ratao.col3.length < 3){
            col3.push(dado)
        } else {
            coluna = escolherColunaAleatoria()
            colocaDadoNaColuna(coluna, dado)
        }
    } else {
        finalizaJogo(calculaPontuacao)
    }
}

// função que diz se o jogo acabou
export function acabouJogo(){
    if((lamb.col1.length == 3 &&
        lamb.col2.length == 3 &&
        lamb.col3.length == 3) ||
        (ratao.col1.length == 3 &&
        ratao.col2.length == 3 &&
        ratao.col3.length == 3)) {
            return true
        } else {
            return false
        }
}

// função que de fato termina o jogo
finalizaJogo(ganhador)