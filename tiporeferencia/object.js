let carro = {
    marca: "Toyota",
    cor: "Azul",
    modelo: "Corolla",
    ano: 2024,
    airbag: true,
    itens: ["abs", "4 portas", "step" ],
}
// * ACESSAR OS VALORES DAS PROPRIEDADES
console.log(carro.marca) //? NOME DA VARIÁVEL E UM . - CARRO.
// * OU : 
console.log(carro["itens"]); //? OU COM O NOME DA VARIÁVEL E ABRE COCHETES E COLOCA "" - CARRO[""]

// * ATUALIZAR AS PROPRIEDADES
carro.cor = "Verde"
console.log(carro);

carro.km = 15000;
console.log(carro);

delete carro.km; //? PARA DELETAR
console.log(carro);

// * VERIFICAR PROPRIEDADE
console.log("autor" in carro); //? nome da propriedade que se quer verificar entre "" e in nome da propriedade - "autor" in livro;
