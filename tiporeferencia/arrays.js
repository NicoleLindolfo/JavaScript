// * ARRAY - armazena uma coleção de elementos
let lista = ["Banana", 23, true, "Maçã"]; //?    0 1 2 3
lista = ["Banana", 23, true, "Pera"];
console.log(lista);

lista[0] = "laranja;"
console.log(lista[0]);
console.log(lista);

lista [4] = "Monitor";
console.log(lista);
console.log(lista.length);

let matrizVendas = [
    [110, 200, 300],
    [400,500,50], //  loja b
    [700,800.400],
];

console.log(matrizVendas);
console.log(matrizVendas[1]);
matrizVendas[1][2]= 500;
console.log(matrizVendas[1]);

let somalojab = matrizVendas[1][0] + matrizVendas[1][1] + matrizVendas[1][2];
console.log(somalojab);

