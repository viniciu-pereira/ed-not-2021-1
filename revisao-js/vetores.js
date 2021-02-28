let frutas = ['maça', "laranja", "pera","uva","mamao","banana" ]
console.log(frutas)
console.table(frutas)
console.log('----------------------------')

//retirar ultimo do vetor
console.log('fruta retirada sendo a ultima usando pop()')
let ultimaFruta = frutas.pop()
console.log(ultimaFruta)

//vetor alterado
console.log('vetor aterado:')
console.log(frutas)
console.table(frutas)//so funciona qunado é passado um vetor 
console.log(ultimaFruta)
console.log('----------------------------')

//retirar primeira fruta
console.log('retirar primeira fruta com shift()')
let primeirafruta = frutas.shift()
console.log(frutas)
console.table(frutas)
console.log(primeirafruta)

console.log('----------------------------')

console.log('retirar posição intermediaria usando splice()')
//retirada em posição intermediária 
    //splice(posição, quantidade a remover, adicionar(e n vai add nada, deixa vazio))
    //splice semopre retornara um vetor
let frutaretirada = frutas.splice(2,1)
console.log(frutas)
console.table(frutas)
console.log(frutaretirada)

console.log('----------------------------')

//inserir elementos no final do vetor:
//push()
frutas.push('amora') //pode inserir mais de um elemento por vez/ ao mesmo tempo (frutas.push('amora', 'jaca'))
console.log('vetor com fruta inserida usando push:')
console.log(frutas)
console.table(frutas)

console.log('----------------------------')

//Inserir elementos no inicio do vetor:
console.log('Inserir no inicio do vetor com unshift():') //pode inserir mais de um elemento por vez/ ao mesmo tempo (frutas.unshift('jabuticaba', 'maça'))
frutas.unshift('jabuticaba')
console.log(frutas)
console.table(frutas)


console.log('----------------------------')

//Inserir elementos no meio do vetor com splice:
console.log('Inserir no meio do vetor com splice():')

//se for inserir numa posicao ja ocupada, chega o de posicao maior para a direita e insere
//pode inserir mais de um elemento por vez 
//se o parametro 2, de quantidade para apagar, todos os elementos serao apagados

frutas.splice(2,0,'pessego')//inserindo: frutas.splice(posicao, quantos apagar, 'insere pessego')
console.log(frutas)
console.table(frutas)

console.log('----------------------------')


//substituir elementos no meio do vetor com splice:
console.log('substituir no meio do vetor com splice():')

frutas.splice(4,1,'ameixa') //para substituição-> frutas.splice(posicao,retirada de 1,'insercao')
console.log(frutas)
console.table(frutas)

console.log('----------------------------')

//insercao multipla elementos no meio do vetor com splice:
console.log('insercao multipla no meio do vetor com splice():')

frutas.splice(1,0,'nectarina','jaca') //para insercao multipla-> frutas.splice(posicao,retirada de 0, insercao de varios elementos)
console.log(frutas)
console.table(frutas) //mostra a posição e organizacao em tabela

console.log('********************************************************************************************************************************************')

//*************************************************************************************
//PERCURSO DE VETOR
//*************************************************************************************

console.log('For tradicional para percorrer vetor:')
//1-FOR TRADICIONAL
for(let i = 0; i<frutas.length; i++){
    console.log(i, frutas[i])
}
//A-conmtagem comeã em 0
//b- ocorre enquanto o contador for menor que o numero de elementos do vetor
//c- termina com th
//d- é o metodo mais flexivel, pois é possivel fazer percurso parcial (sem ser no primeiro e terminar antes do final)

console.log('************************************************')

//For tradicional em ordem inversa
console.log('For tradicional inverso para percorrer vetor:')
//1-FOR TRADICIONAL INVERSO:

for(let i = frutas.length - 1; i >=0; i--){ 
    console.log(i, frutas[i])
}
//a- começa no maior numero do vetor, e como começa em 0 é -1 unidade
//b- enquanto i >=0, por causa do primeiro elemento, que é a posicao 0

console.log('************************************************')

//FOR OF
console.log('percorrendo com FOR OF')

for(let f of frutas){
    console.log(f)
}
//sempre percorre o vetor na ordem natural e o vetor inteiro e sem necessidade de contador
//variaveis: f: receberá cada elemento do vetor em cada passada (qualquer nome valido)
//           frutas -> vetor a ser percorrido
//determina quantos elementos tiver sozinho, jogando a cada passagem o valor do elemento na variavel f 

console.log('************************************************')

//FOR each()
console.log('Usando o FOR EACH')

frutas.forEach(function(elemento){
    console.log(elemento)
})
//foreach() recebe como parametro uma funcoa q recebe como parametro cada elemento do vetor
//o nome do parametro da funcao pode ser qualquer nome valido de identificador 

console.log('************************************************')

console.log('For Each usando arrow function como parametro')

//o mesmo foreach() usando uma arrow function como parametro
//=> = function de forma invertida com o parametro
//omissao das chaves

frutas.forEach(elemento => console.log(elemento))

console.log('************************************************')