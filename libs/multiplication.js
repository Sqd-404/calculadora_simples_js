/**
 * @author Jeferson Lima
 * @date 2023/10/14
 * @description Função de multiplicar
 */
export function multiplicar() {
    const num1 = Number(readlineSync.question("Primeiro valor: "));
    const num2 = Number(readlineSync.question("Segundo valor: "));

    const retornar = undefined;

    if (NaN(num1) || NaN(num2)) {
        retornar = 'Resposta: Digite um número válido, por favor';
    } else {
        retornar = `Resposta: ${num1 * num2}`;
    }

    return console.log(retornar);
}