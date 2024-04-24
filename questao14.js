/**Questão 14 - É possível encadear map() e forEach() juntos? */


const meuArray = [1, 2, 3, 4, 5];
meuArray.forEach(function(elemento1) {
    console.log(elemento1)
});

let meuArray2 = ["1", "2", "3", "4", "5"];
let numero = meuArray2.map(function(elemento2) {
    return parseInt(elemento2);
});
console.log(numero);

//Sim, é possível.