/*
    Implemente um programa verificador de palíndromos utilizando um deque.

    Data de entrega: 31/05, até 20h50, valendo nota de participação
*/

class Palindromo {

    #data 
    #texto
    #textoRev 

    constructor() {
        this.#data = []
        this.#texto = []
        this.#textoRev = []
    }

    insertBack(val) {
        for(let i = 0; i < val.length; i++){
            this.#data.push(val.charAt(i))
        }
        return this.#data
    }

    removeBack() {
        while( this.#data ){
            this.#textoRev += this.#data.pop()
            this.#data--
        }
        return this.#textoRev
    }

    print() {
        return JSON.stringify(this.#data)
    }
}

let classe = new Palindromo()

function executar(palin){

    console.log(classe.insertBack(palin))
    console.log(classe.removeBack())
}

executar('Socorram-me, subi no ônibus em Marrocos')
