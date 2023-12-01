let dado, coluna, col1 = [], col2 = [], col3 = []

function jogarDadoR(){
    dado = Math.floor(Math.random() * 6) + 1
    return dado
}

function escolherColunaAleatoria(){
     coluna = Math.floor(Math.random() * 3) + 1
     return coluna
}


export { jogarDadoR, escolherColunaAleatoria }