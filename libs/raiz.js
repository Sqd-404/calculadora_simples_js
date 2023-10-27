// função para encontrar a raiz

/**
 * @author Victor Hugo
 * @date 2023/10/26
 * @description função responsável por descobrir a raiz
 */

function descobrirRaiz(indice, radicando) {

    indice = Number(indice);
    radicando = Number(radicando);
  
    const resultado = radicando ** (1 / indice);
    console.log(`\nO resultado é: ${resultado}\n`);
}

module.exports = descobrirRaiz
