const readlineSync = require('readline-sync');
function descobrirRaiz() {
    let indice = Number(readlineSync.question('Escolha o indice da raiz: '));
    while (indice < 1) {
        indice = Number(readlineSync.question('O indice nao pode ser menor que 1, escolha um indice valido: '));
    }
    let radicando = Number(readlineSync.question('Escolha o numero do radicando: '));
    while (radicando < 0) {
        radicando = Number(readlineSync.question('Nao existe raiz de numero negativo, escolha um radicando valido: '));
    }
    const resultado = radicando ** (1 / indice);
    console.log(resultado);
}

descobrirRaiz();