// * No tipo referência, modificando a listaB, onde guarda a listaA, a lista A vai ser alterada.

// * Array
let listaA = ["Baby", "Beca", "Capeta"];
let listaB = listaA;

listaB[3] = "Branquinha";
console.log(listaA);

let listaX = [...listaA] //? USANDO O SPREAD (...) A LISTAX SE TORNA UM NOVO ARRAY!
listaX[4] = "Léo"; //? listaA e a listaX são arrays diferentes, alterar a listaX, não altera a listaA.
console.log(listaX);
console.log(listaA);


// * Objeto
let objA = {name: "Nicole"};
let objB = objA;
objB.idade = 18;

console.log(objA); 
console.log(objA); 

let objC = {...objA}; //? SPREAD (...) - NOVO ARAAY
objC.comida = "Lasanha";

console.log(objC);
console.log(objA);

// * No tipo primitivo, modificando a listaD, que guarda a listaC, a lista modificada será somente a D.

let listaC = "Baby"
let listaD = listaC;
listaD = "Beca";

console.log(listaC);
console.log(listaD);

