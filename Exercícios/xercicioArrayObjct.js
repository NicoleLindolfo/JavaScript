// * QUESTÃO 1
let produtos = ["Mouse", "Teclado", "Suporte"];
console.log (produtos[1]);

produtos[3] ="Notebook";
console.log(produtos);

// * QUESTÃO 2 
let clientes = ["Nicole", "Naaman", "Aurinete"];
// clientes[3] = "Baby";
clientes[clientes.length] = "Baby";
// delete clientes[3];
console.log(clientes);
clientes.length = clientes.length - 1;
console.log(clientes);

//* QUESTÃO 3
let produto = {nome:"celular", preço:5000, quantidade:50};
console.log(produto.nome);
produto.preço = 7000;
produto.cor = "Azul";
console.log(produto);

// * QUESTÃO 4
let venda = {cliente:"Nicole", produto:"Canetas", valor:2};
venda.data = 17092026;
delete venda.produto;
console.log(venda);

// * QUESTÃO 5
let estoque = [ "Banana", "Maçã", 12];
let estoqueNovo = [...estoque];
estoqueNovo[3] = "Laranja";
// delete estoque[0];
console.log(estoque);
console.log(estoqueNovo);

let funcionario = { Funcionários: ['Maria', 'João', 'Naaman'] };
let novosfuncionarios = {Funcionários: [...funcionario.Funcionários, 'Ygor']
}
console.log(novosfuncionarios)




// let novosfuncionarios = {
//     ...funcionario,
//     Funcionários: [...funcionario.Funcionários, 'Ygor']
// };
// console.log(novosfuncionarios);