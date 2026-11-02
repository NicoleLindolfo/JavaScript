// * QUESTÃO 1
let precoProduto = 200;
let desconto = 40;
let imposto = 12;

const precoeDesconto = precoProduto - desconto;
const precoFinal = precoeDesconto + imposto;
console.log (`Preço final do produto: R$ ${precoFinal}`);

// * QUESTÃO 2
let custo = 100;
let lucro = 30;
let venda = custo + lucro;
console.log(`Preço de venda do produto: R$ ${venda}`);

// * QUUESTÃO 3
let orcamento = 250;
let produto = 300
let desconto2 = 50;

let descontoAplicado = produto - desconto2;
let verificação = descontoAplicado >= orcamento;
console.log (`Preço com desconto : R$ ${descontoAplicado} e está dentro do orçamento? ${verificação}`);
// console.log(`Está dentro do orçamento? ${verificação}`);

// * QUESTÃO 4
let estoquetotal = "20";
let estoqueminimo = 20;
let conversão = (Number(estoquetotal));
let verificador = conversão === estoqueminimo;
console.log(`A quantidade do estoque é suficiente: ${verificador}`);

// * QUESTÃO 5
let disponivel = true;
let produtoEstoque = 10;
let minimoEstoque = 15;

let booleano = !disponivel
let suficiente = produtoEstoque >= minimoEstoque;
let disponivelSuficiente = disponivel && suficiente

console.log (`O produto está disponivel e tem quantidade suficiente? ${disponivelSuficiente}`);
console.log(`O produto está indisponivel? ${booleano}`);