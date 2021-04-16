// Descobrindo os 30 primeiros numeros da sequencia de Fibonacci
//exercicio do livro Estrutura de dados e algoritmos com JavaScript

const sequence = [];
sequence [1] = 1;
sequence [2] = 1;
for (let i = 3; i < 30; i++){
    sequence [i] = sequence [i - 1] + sequence [i - 2];
   
}
for (let i = 1; i < sequence.length; i++)
console.log([i]);