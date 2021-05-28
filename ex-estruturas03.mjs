/*
    Implemente um programa que receba números em ordem aleatória, mas os
    insira em ordem crescente em uma lista encadeada. Os números devem ser
    adicionados à lista um por vez.

    Por exemplo, inserir o número 25, a lista fica ( 25 )
    Na sequência, insira o número 14, a lista fica ( 14, 25 )
    Insira o número 19, a lista fica (14, 19, 25)
    Insira o número 3, a lista fica (3, 14, 19, 25)

    A cada inserção, o programa deve determinar a posição correta de inserção
    para manter a lista em ordem.

    Data de entrega: 31/05, até 20h50, valendo nota de participação
*/
class Node {
    constructor(val) {
        this.data = val     // Armazenamento de valor
        this.next = null    // Ponteiro para o próximo nodo
    }
}

class LinkedList {

    #head       // Nodo inicial da lista
    #tail       // Nodo final da lista
    #count      // Quantidade de nodos na lista

    constructor() {
        this.#head = null       // Não tem nada no início
        this.#tail = null       // Não tem nada no fim
        this.#count = 0
    }

    get empty() {
        return this.#count = 0
    }

    // Inserção em uma posição arbitrária
    insert(val) {

        // Cria no nodo para abrigar o valor e o endereço do próximo nodo
        let inserted = new Node(val)

        // inserção em lista vazia
        if(this.empty) {
            this.#head = inserted
            this.#tail = inserted
        }

        
        // posição intermediária
        else if ( val > inserted ){
            // Nodo ANTERIOR à posição de inserção
            let before = this.#head
            // Percorre a lista até encontar o nodo da posição ANTERIOR à de inserção
            for(let i = 0; i < this.#count - 1; i++) before = before.next
            // Nodo que irá ficar DEPOIS do inserido
            let after = before.next
            // O próximo do nodo inserido passa a ser o nodo after
            inserted.next = after
            // O próximo do nodo before passa a ser o nodo inserido
            before.next = inserted

            if( val < inserted){
                this.#count++
                this.#tail = inserted
            }
            else{
                this.#count--
                this.#head = inserted
            }
        
        }
        this.#count++
        
    }
}
let lista = new LinkedList()

console.log(lista.insert(10))

console.log(lista.insert(20))
