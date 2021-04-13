let totTrocas, pass, comps

function bubbleSort(vetor, fnComp) {
    totTrocas = 0, pass = 0, comps = 0
    let trocas
    do {
        trocas = 0      // Iniciando uma nova passada
        pass++

        // Percurso do vetor, da primeira até a PENÚLTIMA posição
        for(let i = 0; i <= vetor.length - 2; i++) {
            //if(vetor[i] > vetor[i + 1]) {
            if(fnComp(vetor[i], vetor[i + 1])) {
                // Troca direta em JS via desestruturação de vetor
                [ vetor[i], vetor[i + 1] ] = [ vetor[i + 1], vetor[i] ]
                trocas++
            }
            comps++
        }
        totTrocas += trocas

    } while (trocas > 0)
}

import { cota } from 'Trabalho1 -Organizacao/Bubbles-Sorts/Bubble-Sort-1.mjs'

//console.log('ANTES:', cota)
console.time('Ordenando cota...')
// Ordenando pelo nome de urna (NM_URNA_CANDIDATO)
bubbleSort(cota, (obj1, obj2) => obj1.partido > obj2.nome_parlamentar)
console.timeEnd('Ordenando cota...')
console.log('DEPOIS:', cota)
console.log({totTrocas, pass, comps})   