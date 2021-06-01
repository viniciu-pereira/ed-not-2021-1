/*
    Utilize a estrutura de dados adequada e implemente um programa que converta
    um número decimal em um número binário.

    Data de entrega: 31/05, até 20h50, valendo nota de participação
*/

//Usando stack para o processo

class decimalBinario {

    #data
    #resto
    #resultado


    constructor() {
        this.#data = []      // Inicializa o vetor vazio
        this.#resto          //Inicia valor vazio para resto
        this.#resultado = [] //inicia vetor para resultado


    }

    // Inserção
    push(val) {

        while( val > 0){ //enquanto o numero ainda der pra ser diminuido
            this.#resto = Math.floor(val % 2) //arredonda pra baixo para pegar o resto caso for impar
            this.#data.push(this.#resto) //adiciona ao vetor o resto da divisao
            val = Math.floor( val / 2) //divide o numero por 2 para dividi-lo
        } 
            return this.#data
    
    }

    // Retirada
    pop() {

        while( this.#data ){
            this.#resultado += this.#data.pop()
            this.#data--
        }
    
    return this.#resultado
    }
}

let pilha = new decimalBinario()

function executar(val){
    console.log(pilha.push(val))
    console.log(pilha.pop())
}

//Insira o valor deciaml para conversão para binário:
executar(10)