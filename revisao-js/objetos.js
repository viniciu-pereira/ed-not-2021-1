/*
    *OBJETOS*

    São estruturas que permitem armazenar diversos valores em uma mesma variavel,
        permitindo acessa-los por meio de um nome

*/

//  COMO CRIAR:

 
//Forma antiga/tradicional

let vazio2 = new Object()

//Forma "moderna"

let vazio1 = {}

console.log ('*********************************************************')

//CRIANDO COM DADOS:

let pessoa = { //quebra de linha apenas por facilitar leitura

    //os dados sao armazenados no formato 
    //propriedade: valor (antes e depois dos :)
    //ou tambem chamado de 
    //atributo: valor (antes e depois dos :)
    nome: 'Vraulinelson Garibaldi',
    sexo: 'M',
    dataNasc: '2008-04-19',
    ocupação: 'faz nada, vagabundo esse cara, slc',
    //nome da propriedade pode ter espaços ou acentos, nesses casos precisa estar entre aspas
    'cidade de origem' : 'França',
    gostos: ['jogos','come','bater'] //vetor em posicao de objeto, mas bagunca o console table

}

console.table(pessoa) //mostra em tabela

console.log ('*********************************************************')

//exibindo apenas uma propriedade
console.log('Nome do corno:',pessoa.nome)

//qunado a propriedade tem espaços/acentos é impossivel usar a sintaxe do pontinho
//é necessario usar a de colchetes
//a sintaxe dos colchetes sempre funciona, mesmo se o nome da propriedade for uma unica palavra e sem acento


console.log('Cidade de origem do corno/corna:',pessoa['cidade de origem'])


//para pegar propriedade de vetor dentro de objeto:
console.log('Para ver posicao 1 de vetor dentro de objeto:',pessoa.gostos[1])

console.log ('*********************************************************')

console.log('consequencia do uso da sintaxe dos colchetes:') 
//outra consequencia da sintaxe dos colchetes é a possibilidade de usar nomes de propriedades
//que estao dentro de variaveis
let x = 'sexo'
console.log(pessoa[x])
x = 'dataNasc'
console.log(pessoa[x])

console.log ('*********************************************************')

//colocando propriedade em objeto ja existente:
console.log('colocando propriedade em objeto ja existente(email):')
pessoa.email = 'frantieskovirgoliniiiiiiii@gmail.com.br.gov.org'

console.table(pessoa)

console.log ('******************************************************************************************************************')

//criando um objeto vazio e so depois adicionando:
console.log('Criando objeto e adicionando coisinhas:')

let carro = {}

carro.modelo = 'volksvagendslds'
carro.marca = 'Kombi'
carro.ano = '2030'
carro['combustível'] = 'gasoline bitch'

console.table(carro)

//OBLITERAR PROPRIEDADES:

//OBLITERANDO A PROPRIEDADE CARRO
delete carro.ano

console.table(carro)