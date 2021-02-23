//numeros
console.log('Teste numerico')

let a =10, b = 8, c = 10

console.log(a > b)
console.log(a < b)
console.log(a == c)
console.log(a != c)

console.log('--------------------------------------------------')

//strings
console.log('Teste de string')

    //na comparacoes de string, ele compara os valores da tabela ASC em ordem alfabetica
    //acentuadas vem depois de todas as letras comuns
a = 'ShutUp'
b = 'feelings'
c = 'Graveyard'

console.log(a > b)
console.log(a < b)
console.log(a == c)
console.log(a != c)

console.log('--------------------------------------------------')

//Booleanos
console.log('Teste booleano')

a = true
b = false 
c = true

console.log(a > b)
console.log(a < b)
console.log(a == c)
console.log(a != c)

console.log('--------------------------------------------------')

//vetores
    //comparacoes de vetores dao resultados inconsistentes,
    //nao é possivel comparar diretamente vetores  

    //passa a comparar endereços de memoria nos quais foram parar
console.log('Teste vetores ')

a = [10,20,30,40,50]
b = [-3,-2,-1]
c = [10,20,30,40,50]

console.log(a > b)
console.log(a < b)
console.log(a == c) //da false, por causa do endereço de memoria ser diferente
console.log(a != c) //da true por causa do caso acima

console.log('--------------------------------------------------')

//Objetos
    //Objetos nao sao coparaveis diretamente, mas podem sercomparados deus conteudos, alguns 
    //aspectos apenas

console.log('Teste objetos')

a = {marca: 'Fiat', modelo: '147', ano:'1999999'}
b = {marca: 'Chevrolet', modelo: 'Opalao 6 caneco', ano:'1980'}
c = {marca: 'Fiat', modelo: '147', ano:'1999999'}

console.log(a > b)
console.log(a < b)
console.log(a == c)
console.log(a != c)

console.log('--------------------------------------------------')

/*
    Conclusao:
    sao comparaveis diretamente:
    -number
    -string
    -boolean



*/