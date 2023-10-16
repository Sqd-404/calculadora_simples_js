/**
 * @author Jeferson Lima
 * @date 2023/10/14
 * @description Função de multiplicar
 */
const readlineSync = require("readline-sync");

exports.multiplicar = function() {
    const num1 = Number(readlineSync.question("Primeiro valor: "));
    const num2 = Number(readlineSync.question("Segundo valor: "));

    let retornar;

    if (isNaN(num1) || isNaN(num2)) {
        retornar = '\nResposta: Digite um número válido, por favor\n';
    } else {
        retornar = `\nResposta: ${num1 * num2}\n`;
    }

    return console.log(retornar);
};