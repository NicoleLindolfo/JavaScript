// * EXPOENTE
let base = 2;
let expoente = 3;
let resultado = base ** expoente; // * 2 elevado a 3 - 2 x 2 x 2 = 8
console.log (resultado);

// * INCREMENTTO ++  EX:
let tentativasDeLogins = 0;
tentativasDeLogins++;
if (tentativasDeLogins > 3) {
    console.log("conta bloqueada");
}

// * DECREMENTO --
let controle = 0;
console.log(controle--);
console.log(controle);
console.log(controle--);
console.log(controle);

// * PRÉ INCREMENTO E PRÉ DECREMENTO ++VARIÁVEL --VARIÁVEL
let preIncremento = 0;
console.log(++preIncremento);
console.log(++preIncremento);
console.log(++preIncremento);
console.log(++preIncremento);

// * COMPARADORES:
console.log(5 == "5"); //? == COMPARA A INFROMAÇÃO NÃO O TIPO DELA
// ! BOA PRÁTICA UTILIZAR O ===     :
console.log(5 === "5"); //? === COMPARA A INFORMAÇÃO E O TIPO

// * DESIGUALDADE :
console.log(5 != "5"); //? DESIGUALDADE != - esse 5 não é igual a esse "5" - false
// ! BOA PRÁTICA UTILIZAR O !==     :
console.log(5 !== "5"); //? ESTRITA DESIGUALDADE !== - esse 5 não é igual a esse "5" - true


let senha= 1234;
let senhaDigitada= 12345;
let comparação= senha === senhaDigitada;
console.log("Minha senha está:" + comparação);

// * MAIOR E MENOR 
console.log(10 > 10);
console.log (10 >= 10);


// * COERÇÃO EXPLÍCITA
let number= 123;
console.log(String(number));

let string= "54";
console.log(Number(string));

let texto= "nicole";
console.log(Number(texto)); //* Não existe número em nicole, não há como converter.

let booleano= true;
console.log(String(booleano));

let letra= "texto";
let num= 1;
console.log(Boolean(letra));
console.log(Boolean(num));



// ? && (AND) - AMBAS AS CONDIÇÕES SÃO VERDADEIRAS   :
let idade= 20;
let codigoPromocional= true;
// * Verificando se o usúario tem idade suficiente e possui um código :
let podeFazerLogin = idade >= 18 && codigoPromocional;
console.log (podeFazerLogin);

let idade2= 15;
let codigoPromocional2= true;
let podeFazerLogin2= idade2 >= 18 && codigoPromocional2;
console.log(podeFazerLogin2);

// ? || (OR) - APENAS UMA CONDIÇÃO PRECISA SER VERDADEIRA  :
let loginOr = idade2 >= 18 || codigoPromocional2;
console.log(loginOr);


// ? ! (NOT) INVERTE VALOR BOOLEANO  : 
let perfilConfiguração = false; 
// * Verificando se o perfil não está configurado  : 
let alerta = !perfilConfiguração;
console.log(alerta); 