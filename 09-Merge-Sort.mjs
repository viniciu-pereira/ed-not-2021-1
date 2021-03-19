/*
    MERGE SORT

    No processo de ordenação ele 'desmonta' o vetor original 
contendo n elementos até obter N vetores de apenas 1 elemento cada.
    Em seguida, usando a técnica de mesclagem (merge), ele remonta o vetor ja ordenado

*/

//********************************************************************************************************************************************
//estatistica
let comparacoes, divisoes, juncoes 

function mergeSort(vetor){

    function mesclar(vetEsq, vetDir){
        let pEsq = 0, pDir = 0, vetRes = [] //p sao os ponteiros, marcando a posicao

        while(pEsq < vetEsq.length && pDir < vetDir.length){ //so roda se nenhum dos vetores estiverem acabado os valores
            if((vetEsq[pEsq]) < (vetDir[pDir])){
                vetRes.push(vetEsq[pEsq])
                pEsq++
            }
            else {
                vetRes.push(vetDir[pDir])
                pDir++
            }
            comparacoes++
        }
        //Descobrir de qual lado sobrou

        //Sobra do lado esquerdo
        let sobra
        if(pEsq < pDir) sobra = vetEsq.slice(pEsq) 

        //Sobra à direita
        else sobra = vetDir.slice(pDir)

        //Retorna vetor de resultado
        return [...vetRes, ...sobra]
    }

    //para desmontar uim vetor, ele precisa ser maior que 1, ao menos 2 elementos
    if(vetor.length > 1){
        const meio = Math.floor(vetor.length / 2)

        //criando vetor da esquerda 
        //slice() fatia um vetor, cpoiando os elemntos desde a posição inicial informada
            //(inclusive) até a posicao final (exclusive - a posicao final NAO entra, se de 0 a 5( 0, 1, 2, 3, 4))
        let vetEsq = vetor.slice(0, meio)

        //caso o segundo parametro de slice seja omitido, serao copiados os elementos desde a posicao informada ate a final
            //o resto desde aqla posicao
        let vetDir = vetor.slice(meio)
        divisoes++

        //console.log({vetEsq, vetDir})

        //chamadas recursivas à funcao
            //dentro de uma funcao, se chama ela mesma
        vetEsq = mergeSort(vetEsq) //para ate todo o vetor ser picado
        vetDir = mergeSort(vetDir) //depois do lado esquerdo, faz essa funcao ate ficar totalmente picado

        const vetFinal = mesclar(vetEsq, vetDir) 
        juncoes++
        //console.log({vetFinal})
        return vetFinal
        
    }

    return vetor // vetor de 1 elemento nao modificado, condicao de saida
}

comparacoes = 0, divisoes = 0, juncoes = 0
let vetorTeste = [7,4,9,0,6,1,8,2,5,3]
mergeSort(vetorTeste)

console.log({comparacoes, divisoes, juncoes})


import { nomes } from './includes/100-mil-nomes.mjs'

comparacoes = 0, divisoes = 0, juncoes = 0
console.time('Ordenando nomes...')
const nomesOrd = mergeSort(nomes)
console.timeEnd('Ordenando nomes...')
let memoria = process.memoryUsage().heapUsed / 1024 / 1024 

console.log('Depois:', nomesOrd)
console.log({comparacoes, divisoes, juncoes, memoria})