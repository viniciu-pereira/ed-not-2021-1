function fatorail11(n){
    let res = 1

    for(let i = n; i > 1; i--) res *= i
        return res
    
}

console.log(fatorail11(5))
console.log(fatorail11(12))

//fatorial
/*
5! = 5 * (5 - 1)!

n! = n * (n - 1)!

1! = 1
0! = 1
*/
console.log('Parte 2 --------------------------------------------------------------------------------------')
 //parte 2 pelo metodo recursivo

function fatorial2(n){
    if(n <= 1) return 1 //verifica se é caso especial, CONDICAO DE SAIDA
    else return n * fatorial2(n - 1) //salva o resultado e volta para calcular o resultado do proximo numero
 /*
 fatorail de 5
 cai no else e volta para calcular o fatorial de 4 e guarda o resultado
 cai no else e volta para calcular o fatorial de 3 e guarda o resultado do fatorail ate o 3
 ...
 ate cair no if e sair da funcao
 
 */
}

console.log(fatorial2(5))
console.log(fatorial2(12))