/* 
    BUSCA SEQUENCIAL EM OBJETOS
 */

 function buscaSequencial(vetor, valorBusca, fnComp){ //
    for(let i = 0; i < vetor.length; i++){
        if(fnComp(vetor[i], valorBusca)) //em vez de fazer a comparacao dentro da funcao de busca, ela foitercerizada para uma outra funcao que foi chamada dentro dessa.
        return i
    }
    return -1 //valor de busca nao encontrado
}

/*
function comparaNome(objNome, valorBusca) {
    return objNome.first_name === valorBusca
}
*/
 //funcao acima em arrow
const comparaNome = (objNome, valorBusca) => objNome.first_name === valorBusca

import { objNomes} from './includes/vetor-obj-nomes.mjs'

console.log(buscaSequencial(objNomes,'Fausto',comparaNome))
