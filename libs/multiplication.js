/**
 * @author Jeferson Lima
 * @date 2023/10/14
 * @description Função de multiplicar
 */

exports.multiplicar = function(fator1, fator2) {
    
    fator1 = Number(fator1);
    fator2 = Number(fator2);

    let retornar;

    if (isNaN(fator1) || isNaN(fator2)) {
        retornar = '\nResposta: Digite um número válido, por favor\n';
    } else {
        retornar = `\nResposta: ${fator1 * fator2}\n`;
    }

    console.log(retornar);
}