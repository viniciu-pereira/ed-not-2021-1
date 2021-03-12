/*
    SELECTION SORT

    Trata-se de uam otimização do bubble sort, diminuindo drasticamente o número de trocas 
        necessárias para fazer a ordenação

    Isola um dos valores do vetor e procura pelo menor valor entre os restantes, promovendo
        a troca caso o primeiro valor seja maior que o segundo
*/

//ESTE ARQUIVO LEVA EM MEDIA 3 MIN PARA SER EXECUTADO

//variaveis de estatistica

let trocas, passada, comparacoes


function selectionSort(vetor) {//inicio da funcao selectionSOrt

    trocas = 0, passada = 0, comparacoes = 0 //importante zerar

    function encontrarMenor(inicio){
        let menor = inicio

        for(let j = inicio + 1; j < vetor.length; j++ ){
            if(vetor[j] < vetor[menor]) menor = j 
            comparacoes++ //incrementando o numero de comparacoes
        }
        return menor
    }

    //percurso de vetor ate a penultima posição
        for(let i = 0; i <= vetor.length - 2; i++ ){
            passada++
            let menor = encontrarMenor(i + 1)

            if(vetor[menor] < vetor[i]){ //comparando se o vetor na posicao menor é menor que na posicao i
                [vetor[menor], vetor[i] ] = [vetor[i] , [vetor[menor] ]] //trocando a ordem dos vetores
                trocas++
            }
            comparacoes++
        }

}

//let vetorTeste = [7,4,9,0,6,1,8,2,5,3]

let vetorInvertido = [9,8,7,6,5,4,3,2,1,0]
//selectionSort(vetorTeste)
selectionSort(vetorInvertido)

//console.log(vetorTeste)
console.table(vetorInvertido)

console.log({trocas, passada, comparacoes})

import { nomes } from './includes/100-mil-nomes.mjs'

console.time('Ordenando nomes...')
selectionSort(nomes)
console.timeEnd('Ordenando nomes...')

console.log('Depois:', nomes)
console.log({trocas, passada, comparacoes})

