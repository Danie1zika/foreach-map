/**Questão 07 – Crie um algoritmo usando o método map() para calcular o 
quadrado de cada número em um array?  */


var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var quadrados = numeros.map(function(soma){
   return Math.pow(soma, 2);
});

console.log(quadrados); 