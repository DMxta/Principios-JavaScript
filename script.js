alert('Página atualizada.')

// Tipos primitivos

// Boolean ou 
var VDouF = false;
console.log(VDouF);
console.log(typeof(VDouF));

// Number
var numeroAleatorio = 7;
console.log(numeroAleatorio);
console.log(typeof(numeroAleatorio));

// String
var nome = 'Débora';
console.log(nome);
console.log(typeof(nome));

// Atribuição
var atribuicao = 'Débora';

// Comparação
var comparacao = '0' == 0;
console.log(comparacao);
/**
Como declarar: '0' == 0;
Como ler: "0" tem o valor igual a 0?
Nesse caso retorna "true", por sempre retornar valor boolean.
 */

// Comparção Idêntica
var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);
/**
Como declarar: '0' === 0;
Como ler: "0" tem o valor e o tipo idêntico a 0?
Nesse caso retorna "false" já que o '0' é uma string.
 */

// Operadores Aritméticos

// Adição
var adicao = 5 + 7;
console.log(adicao);

// Subtração
var subtracao = 10 - 3;
console.log(subtracao);

// Multiplicação
var multiplicacao = 3.5 * 2;
console.log(multiplicacao);

// Divisão Real
var divisaoReal = 10 / 2;
console.log(divisaoReal);

// Divisão Inteira
var divisaoInteira = 5 % 2;
console.log(divisaoInteira);

// Potenciação
var potenciacao = 2 ** 4;
console.log(potenciacao);

// Operadores Relacionais

// Maior Que
var maiorQue = 5 > 2;
console.log(maiorQue);

// Menor Que
var menorQue = 10 < 7;
console.log(menorQue);

// Maior ou Igual a
var maiorOuIgual = 10 >= 12;
console.log(maiorOuIgual);

// Menor ou Igual a
var menorOuIgual = 19 <= 20;
console.log(menorOuIgual);

// Operadores Lógicos

// $$ - "e" - Considera que todos os valores sejam "true".
var e = true && false;
console.log(e);

// || - "ou" - Considera que qualquer valor seja "true".
var ou = true || false;
console.log(ou);

// ! - "não" - Inverte o valor de "true" para "false" ou vice-versa.
var nao = ! true;
console.log(nao);