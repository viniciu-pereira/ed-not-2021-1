let frutas = ['maça', "laranja", "pera","uva","mamao","banana" ]
console.log(frutas)
console.log('----------------------------')

//retirar ultimo do vetor
console.log('fruta retirada:')
let ultimaFruta = frutas.pop()
console.log(ultimaFruta)

//vetor alterado
console.log('vetor aterado:')
console.log(frutas)
console.log(ultimaFruta)
console.log('----------------------------')

//retirar primeira fruta
console.log('retirar primeira fruta')
let primeirafruta = frutas.shift()
console.log(frutas)
console.log(primeirafruta)

console.log('----------------------------')

console.log('retirar posição intermediaria')
//retirada em posição intermediária
    //splice(posição, quantidade a remover, adicionar(e n vai add nada, deixa vazio))
    //splice semopre retornara um vetor
let frutaretirada = frutas.splice(2,1)
console.log(frutas)
console.log(frutaretirada)