// função para encontrar a raiz

/**
 * @author Victor Hugo
 * @date 2023/10/26
 * @description função responsável por descobrir a raiz
 */

function descobrirRaiz(indice, radicando) {

    indice = Number(indice);
    while (isNaN(indice) || indice < 1) {
        console.log('O indice deve ser um numero e maior que 1, escolha um indice valido: ');
    }
    
    radicando = Number(radicando);
    while (isNaN(radicando) || radicando < 0) {
        console.log('O radicando deve ser um numero e nao pode ser negativo, escolha um radicando valido: ');
    }
    const resultado = radicando ** (1 / indice);
    console.log(`\nO resultado é: ${resultado}\n`);
}

module.exports = descobrirRaiz
