// função para encontrar a raiz

/**
 * @author Victor Hugo
 * @date 2023/10/26
 * @description função responsável por descobrir a raiz
 */

const readlineSync = require('readline-sync');
function descobrirRaiz() {
    let indice = Number(readlineSync.question('Escolha o indice da raiz: '));
    while (isNaN(indice) || indice < 1) {
        indice = Number(readlineSync.question('O indice deve ser um numero e maior que 1, escolha um indice valido: '));
    }
    let radicando = Number(readlineSync.question('Escolha o numero do radicando: '));
    while (isNaN(radicando) || radicando < 0) {
        radicando = Number(readlineSync.question('O radicando deve ser um numero e nao pode ser negativo, escolha um radicando valido: '));
    }
    const resultado = radicando ** (1 / indice);
    console.log(`O resultado é: ${resultado}`);
}

descobrirRaiz();