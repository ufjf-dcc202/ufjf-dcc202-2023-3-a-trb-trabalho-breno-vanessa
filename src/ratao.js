let dado, coluna;

function jogarDado(){
    dado = Math.floor(Math.random() * 6) + 1
    return dado;
}

function escolherColuna(){
     coluna = Math.floor(Math.random() * 3) + 1
}


export { jogarDado, escolherColuna }