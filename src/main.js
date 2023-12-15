import { getRatao, 
    getLamb, 
    jogarDado,  
    confereColunaAdversaria,
    atualizaPontuacao,
    colocaDadoNaColuna,
    acabouJogo,
    finalizaJogo} 
from "./funcoesPadroes.js"

import { escolheColuna } from "./lamb.js"

import { escolheColunaAleatoria } from "./ratao.js"

// const col10c = document.querySelector("#col10c")
// const col11c = document.querySelector("#col11c")
// const col12c = document.querySelector("#col12c")
// const col20c = document.querySelector("#col20c")
// const col21c = document.querySelector("#col21c")
// const col22c = document.querySelector("#col22c")
// const col30c = document.querySelector("#col30c")
// const col31c = document.querySelector("#col31c")
// const col32c = document.querySelector("#col32c")
// const col10r = document.querySelector("#col10r")
// const col11r = document.querySelector("#col11r")
// const col12r = document.querySelector("#col12r")
// const col20r = document.querySelector("#col20r")
// const col21r = document.querySelector("#col21r")
// const col22r = document.querySelector("#col22r")
// const col30r = document.querySelector("#col30r")
// const col31r = document.querySelector("#col31r")
// const col32r = document.querySelector("#col32r")

const col1C = document.querySelector("#col1C")
const col2C = document.querySelector("#col2C")
const col3C = document.querySelector("#col3C")
const col1R = document.querySelector("#col1R")
const col2R = document.querySelector("#col2R")
const col3R = document.querySelector("#col3R")

const sortR = document.querySelector("#sorteadorR")
const sortC = document.querySelector("#sorteadorC")

