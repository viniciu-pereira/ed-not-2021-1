//funcao q eleva um numero ao quadrado
//se precisar em situação real -> Math.pow() ou operador **

function quadrado(n){
    return n*n
}

console.log(quadrado(9))
//caracteristicas da funcao acima

//1-apenas 1 parametro 
//2- uma linha de codigo
//3- CANDIDATA PERFEITA A VIRAR ARROW FUNCTION

console.log('*******************************************************************')


console.log('Transformnando em arrow fuinction:')
//Transformando em arrow function

const quadrado2 = n => n * n 

console.log(quadrado2(9))

//nao precisa de parenteses envolvendo o parametro
//a palavra function vira => depois do parametro
//nao sao necessarios chaves e nem return