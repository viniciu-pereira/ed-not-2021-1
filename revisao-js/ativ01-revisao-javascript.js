/*

   DADOS PARA O EXERCÍCIO

   nome;sigla;area;populacao
   Sergipe;SE;21915.08;2278308
   Alagoas;AL;27848.14;3322820
   Rio Grande do Norte;RN;52811.05;3479010
   Paraíba;PB;56469.78;3996496
   Pernambuco;PE;98148.32;9496294
   Ceará;CE;148920.47;9075649
   Piauí;PI;251577.74;3264531
   Maranhão;MA;331937.45;7035055
   Bahia;BA;564733.18;14812617

*/

let estadosNe = []

let estado1 = {
   nome: 'Sergipe',
   sigla: 'SE',
   area: 21915.08,
   populacao: 2278308
}

estadosNe.push(estado1)

/*
   1) Crie objetos para os demais Estados, segundo o modelo acima, e acrescente-os
      ao vetor estadosNe usando push().
*/
console.log('passo 1')

let estado2 = { //decalrando objeto de um novo estado
   nome: 'Alagoas',
   sigla: 'AL',
   area: 27848.14,
   populacao: 3322820
} //termino do objeto 

estadosNe.push(estado2) //inserindo um novo objeto ao vetor principal

let estado3 = { //decalrando objeto de um novo estado
   nome: 'Rio Grande do Norte',
   sigla: 'RN',
   area: 52811.05,
   populacao: 3479010
}//termino do objeto

estadosNe.push(estado3) //inserindo um novo objeto ao vetor principal

let estado4 = { //decalrando objeto de um novo estado
   nome: 'Paraíba',
   sigla: 'PB',
   area: 56469.78,
   populacao: 3996496
}//termino do objeto

estadosNe.push(estado4) //inserindo um novo objeto ao vetor principal

let estado5 = { //decalrando objeto de um novo estado
   nome: 'Pernambuco',
   sigla: 'PE',
   area: 98148.32,
   populacao: 9496294
}//termino do objeto

estadosNe.push(estado5) //inserindo um novo objeto ao vetor principal

let estado6 = { //decalrando objeto de um novo estado
   nome: 'Ceará',
   sigla: 'CE',
   area: 251577.74,
   populacao: 3264531
}//termino do objeto

estadosNe.push(estado6)//inserindo um novo objeto ao vetor principal

let estado7 = { //decalrando objeto de um novo estado
   nome: 'Piauí',
   sigla: 'PI',
   area: 21915.08,
   populacao: 3264531
}//termino do objeto

estadosNe.push(estado7)//inserindo um novo objeto ao vetor principal

let estado8 = { //decalrando objeto de um novo estado
   nome: 'Maranhão',
   sigla: 'MA',
   area: 331937.45,
   populacao: 7035055
}//termino do objeto

estadosNe.push(estado8)//inserindo um novo objeto ao vetor principal

let estado9 = { //decalrando objeto de um novo estado
   nome: 'Bahia',
   sigla: 'BA',
   area: 564733.18,
   populacao: 14812617
}//termino do objeto

estadosNe.push(estado9)//inserindo um novo objeto ao vetor principal

console.table(estadosNe)

/*
   2) Escreva uma arrow function que receba dois parâmetros, área e população, e
      calcule a densidade demográfica retornando o resultado da divisão da
      segunda pela primeira. 
*/
    console.log('passo 2:')
    console.log('funcao')
    const calculoDensisdade = (area,populacao) => populacao/area

/*
   3) Percorra o vetor estadosNe usando um for tradicional. Para cada estado,
      chame a arrow function criada em 2) e efetue o cálculo correspondente.
      Com o resultado do cálculo, crie uma propriedade chamada 'densidade
      demográfica' para cada objeto representando um Estado.

      Durante este mesmo loop, elimine a propriedade 'sigla' dos objetos.

*/
console.log('passo 3:')
for(let i = 0; i<estadosNe.length;i++){ //for percorrendo o vetor

    estadosNe[i].densidade = (parseFloat(calculoDensisdade(estadosNe[i].area,estadosNe[i].populacao).toFixed(2))) //criando a propriedade densidade para cada posicao no vetor e chamando a funcao (2) para calcular
    //parse float: para transformar em tipo number novamente
    //toFixed: encontrado no MDN/YouTUbe em como arredondar numeros com muitas casas sendo (2) o numero de casas decimais, mas ele volta como string, por isso o parseFLoat
    delete estadosNe[i].sigla //deletando a propriedade sigla em cada obejto
}

console.table(estadosNe) //mostragem do vetor, não sei a razao de trantas coisas sendo mostradas '-', suspeito do for podenndo estar mal organizado.



/* 4) Escreva uma arrow function que receba um objeto. Na função, use for..in
      para extrair as propriedades e seus valores e exibi-los com console.log().

*/
console.log('passo 4:')
console.log('funcao')

const propriedadeObjeto = (obj) => { //funcao que recebe um objeto 
    for(let p in obj){ //percorrendo as propriedades do objeto com for in
        console.log(p +':'+ obj[p]) //p: mostra a propriedade em cada posicao do objeto,na posicao p / obj[p]: exibe o valor daquela propriedade
    }
    console.log('-------------------------') //apenas para fins esteticos de separar as informacoes
}

/* 5) Percorra o vetor estadosNe usando for..of. Para cada objeto no vetor,
      invoque a função escrita em 4) para exibi-lo.
*/

console.log('passo 5:')
for(let e of estadosNe){ //for of para percorrer vetor mostrando os valores
    propriedadeObjeto(e) //chmando a funcao (4) para cada posicao do vetor
}
/*
   6)
      a) Declare um vetor vazio.
      b) Insira no vetor criado no item a) apenas o nome de cada Estado, conforme
         os dados no topo deste arquivo, um de cada vez. Faça as inserções de 
         modo que o vetor final esteja em ordem alfabética. No caso, o primeiro 
         Estado (Sergipe), pode ser inserido com push(), mas o segundo (Alagoas)
         deve ser inserido com unshift(), para manter a ordem alfabética. 
         O terceiro Estado (Rio Grande do Norte) deve ser inserido entre os dois 
         já existentes, e assim por diante.

*/
console.log('passo 6-A:')
console.log('vetor')

let vetor = [] //decalaracao do vetor vazio

console.log('passo 6-B:')
console.log('Tentei fazer de uma maneira que se um nome de estado fosse alterado, ele ja fosse organizado de imediato:')
console.log('Percorri o vetor estadosNe e pra cada posicao ele adicionava ao vetor, e no final o sort organiza ele.')

for(let a in estadosNe){ //for in para percorrer as propriedades do vetor estados
    vetor.push(estadosNe[a].nome) //push para adicionar a propriedade nome de cada objeto ao 'vetor'
}

vetor.sort() //funcao sort que lembrei de aulas anteriores e posteriormente encontrada no MDN e YouTube para como usar corretamente.
console.table(vetor) //exibicao do vetor