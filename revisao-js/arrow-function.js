//funcao q eleva um numero ao quadrado
//se precisar em situação real -> Math.pow() ou operador **

console.log('Funcao simples para transformar em arrow')
function quadrado(n){
    return n*n
}

console.log(quadrado(9))
//caracteristicas da funcao acima

//1-apenas 1 parametro 
//2- uma linha de codigo
//3- CANDIDATA PERFEITA A VIRAR ARROW FUNCTION



console.log('Transformnando em arrow fuinction:')
//Transformando em arrow function

const quadrado2 = n => n * n 

console.log(quadrado2(9))

//nao precisa de parenteses envolvendo o parametro
//a palavra function vira => depois do parametro
//nao sao necessarios chaves e nem return

console.log('*******************************************************************')

//funcao com mais de um parametro

function potencia(b,e) {//b=base, e = expoente
return b ** e

}

console.log('chamando funcao potencia com 2 parametros:')
console.log(potencia(2,8))

//FUNCAO EQUIVALENTE EM ARROW   

let potencia2 = (b,e) => b ** e 

//quando temos mais de um parametro, os parenteses em volta dos
//argumentos sao obrigatorios, mesmo se eles nao existirem em si, como funcoes q nao precisam de parametros para funcionar

console.log('Chamando arrow com 2 parametros:')
console.log(potencia2(2,8))

console.log('*******************************************************************')

//FUNCAO SEM PARAMETRO

function megasena(){
        //esta funcao sorteia um numero aleatorio entre 1 e 60 usando Math.random
        //pega um aleatorio entre 0 (inclusive) e 1 (exclusive) mas frassionarios
        //*60 ajusta a faixa de valores entre 0 e 59
        //+1 ajusta a faixa de valores para entre 1 e 60 (nunca da maior q o maximo numero estipulado)
        //Math.floor arredonda para o menor inteiro( tira as casas decimais)

        
        return Math.floor(Math.random()*60 +1)
}

console.log('funcao para sortear numero entre 1 e 60')
console.log(megasena(),'e', megasena())

//FUNCAO MEGASENA EM ARROW ******************************************************

//quando a funao nao tem argumentos, na arrow é necessario
//um par de parenteses vazios para mostrar seu lugar

const megasena2 = () => Math.floor(Math.random()*60+1)

console.log('Arrow da funcao megasena:')
console.log(megasena2())

console.log('*******************************************************************')

//FUNCAO COM MAIS DE UMA LINHA NO CORPO

function somaVet(vet){
    let soma = 0
    for (let n of vet) soma += n  //deixa o codigo mais compacto, uma simplificacao
    return soma
}

console.log('Funcao para somar vetor:')
console.log(somaVet([12,42,-11,20,9,16]))

//PASSANDO PARA ARROW:
 
    //Quando temos mais de uma linha, arrow function perde o sentido (ganhar espaço),
    //pois as chaves e o retunr voltam (return volta caso retorne valor)

const somaVet2 = vet => {
    let soma = 0
    for (let n of vet) soma += n  
    return soma
}

console.log('Funcao para somar vetor com arrow function:')
console.log(somaVet2([12,42,-11,20,9,16]))

//CONCLUSAO ARROW

 /*
    com uma linha de codigos, sao muito compactas de serem usadas, mas quando passam de uma linha, 
    passa a n ser tao util usar elas
    
 */

 console.log('*******************************************************************')