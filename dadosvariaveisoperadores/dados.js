// * "Um Texto" - String
// * 'Mensagem' - String
// * `Com cráse`- String Template

let mensagem = "Olá,";
let nome = "Paulo";
console.log (`${mensagem} ${nome}. Seja bem-vindo!`);   //? STRING TEMPLATE

//? ÍNDICE : 
let eu = "Nicole" //? 6 LETRAS - erro! 0,1,2,3,4,5 - CERTO!
console.log (eu[0]); //? A primeira letra é o N que está na colocação 0. 

// * 0=1 1=2 3=4 5=6
console.log (eu[1]);
console.log (eu[2]);
console.log (eu[3]);
console.log (eu[4]);
console.log (eu[5]);

// *NUMBER
let numero= 30;
let numero1= -56;
let decimal= 6.78;
// ? INFINITY E NaN

// ! !!
let string = "10";
let number10 = 10;
console.log(string + number10); 
// ! resultado = 1010 - quando o valor está entre "" é interpretado que ele é um texto.


let x= "15";
let y= 15;
console.log (x == y); //? LOOSE EQUALITY - O JS CONVERTE UM DOS VALORES PARA QUE OS TIPOS SEJAM IGUAIS
console.log (x === y); //? STRICT EQUALITY - NÃO FAZ NENNHUMA CONVERSÃO. COMPARA TIPO E VALOR AO MESMO TEMPO!

// ? BOOLEANS
let ligado = true; //* TRUE = 1
let desligado = false; //* FALSE = 0

console.log (true == 1);
console.log (false == 0);

let a = "Paula";
console.log(Boolean(a)); //? STRINGS SÃO TRUE

let b = 0; //? TODO NÚMERO É TRUE, MENOS 0 E -0 E NaN 
console.log(Boolean(b));
