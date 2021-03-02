function buscaSequencial(vetor, fnComp){ //
    for(let i = 0; i < vetor.length; i++){
        if(fnComp(vetor[i])) //em vez de fazer a comparacao dentro da funcao de busca, ela foitercerizada para uma outra funcao que foi chamada dentro dessa.
        return i
    }
    return -1 //valor de busca nao encontrado
}



/*
function comparaNome(objNome, valorBusca) {
    return objNome.first_name === valorBusca
}
*/

/* FUNCOES QUE FORMARAM A ARROW FUNCTION DENTRO DOS CONSOLE.LOG*/ 
//const comparaNome = (objNome, valorBusca) => objNome.first_name === valorBusca

//const comparaGrupo = (objNome, valorBusca) => objNome.group_name === valorBusca

import {objNomes} from './includes/vetor-obj-nomes.mjs'

console.log(buscaSequencial(objNomes,'Maria', obj => obj.first_name === 'Fausto'))
console.log(buscaSequencial(objNomes,'Maria', obj => obj.group_name === 'Maria'))

//primeiro nome da lista que tem mais de 1000 registrados:
let pos = buscaSequencial(objNomes, obj => obj.frequency_total > 1000)

console.log(objNomes[pos])

pos = buscaSequencial(objNomes, obj => obj.frequency_total > 10000 && obj.classification === 'M')