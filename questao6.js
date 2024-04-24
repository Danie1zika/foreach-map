/**Questão 06 – Crie um algoritmo usando o método forEach() para imprimir 
apenas os elementos pares de um array? */


let numeros = [1, 2, 3, 4, 5];
let numerosDobrados = numeros.map(function(elemento) {
    return elemento * 2;
});
console.log(numerosDobrados);