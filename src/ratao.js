let dado, coluna, col1 = [], col2 = [], col3 = []

function jogarDadoR(){
    dado = Math.floor(Math.random() * 6) + 1
    return dado
}

function escolherColunaAleatoria(){
     coluna = Math.floor(Math.random() * 3) + 1
     return coluna
}

function colocaDadoNaColuna(){
    if(escolherColunaAleatoria() == 1 && col1.length < 3){
        col1.push(dado)
    } else if(escolherColunaAleatoria() == 2 && col2.length < 3){
        col2.push(dado)
    }
}


export { jogarDadoR, escolherColunaAleatoria }