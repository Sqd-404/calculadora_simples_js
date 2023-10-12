//Módulo que permite interação via terminal de maneira síncrona
const readlineSync = require('readline-sync');

//@author: Wilson Rocha
//@description: Função que recebe dois valores e retorna a subtração deles
const calculadora = () => {

    //const operator = readlineSync.question('Digita a operação desejeda: ');

    const n1 = Number(readlineSync.question('Digite o primeiro numero: '));
    const n2 = Number(readlineSync.question('Digite o segundo numero: '));
    

    let result = n1 - n2;

    console.log(`Resultado: ${n1} - ${n2} = ${result}`);
}

calculadora();