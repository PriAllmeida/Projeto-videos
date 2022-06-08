valorpro1 = 1
valorpro2 = 2
valorpro3 = 1

preco1 = 25,00
preco2 = 45,50
preco3 = 65,00

alug1 = 12.50
alug2 = 15,90
alug3 = 11,00

somaAssinatura = preco1 + preco2 + preco3
somaAluguel = alug1 + alug2 + alug3

quantidaDeProdutos = valorpro1 + valorpro2 + valorpro3
somatotal = preco1 + preco2 + preco3


//let pro1 = document.querySelector('#pro1').innerHTML = valorpro1
//let pro2 = document.querySelector('#pro2').innerHTML = valorpro2
//let pro3 = document.querySelector('#pro3').innerHTML = valorpro3

// let pre1 = document.querySelector('#pre1').innerHTML = 'R$ ' + parseFloat(preco1).toFixed(2)
// let pre2 = document.querySelector('#pre2').innerHTML = 'R$ ' + parseFloat(preco2).toFixed(2)
// let pre3 = document.querySelector('#pre3').innerHTML = 'R$ ' + parseFloat(preco3).toFixed(2)


// let totprod = document.querySelector('#totprod').innerHTML = quantidaDeProdutos + ' Produtos'

// let tot = document.querySelector('#tot').innerHTML = 'R$ ' + parseFloat(somatotal).toFixed(2)


//================

let assinatura1 = document.querySelector('#assinatura1').innerHTML = 'R$ ' + parseFloat(preco1).toFixed(2)
let assinatura2 = document.querySelector('#assinatura2').innerHTML = 'R$ ' + parseFloat(preco2).toFixed(2)
let assinatura3 = document.querySelector('#assinatura3').innerHTML = 'R$ ' + parseFloat(preco3).toFixed(2)
let totalAssinantes = document.querySelector('#totalAssinantes').innerHTML = 'R$ ' + parseFloat(somaAssinatura).toFixed(2)

let aluguel1 = document.querySelector('#aluguel1').innerHTML = 'R$ ' + parseFloat(alug1).toFixed(2)
let aluguel2 = document.querySelector('#aluguel2').innerHTML = 'R$ ' + parseFloat(alug2).toFixed(2)
let aluguel3 = document.querySelector('#aluguel3').innerHTML = 'R$ ' + parseFloat(alug3).toFixed(2)

let totalAluguel = document.querySelector('#totalAluguel').innerHTML = 'R$ ' + parseFloat(somaAluguel).toFixed(2)

