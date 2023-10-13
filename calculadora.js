//Módulo que permite interação via terminal de maneira síncrona
const readlineSync = require('readline-sync');


//FUNCTIONS

//@author: Wilson Rocha
//@description: A função recebe dois valores e retorna a subtração deles
const calculadora = (n1, n2) => {

    let result;

    //const operator = readlineSync.question('Digite a operação desejeda: ');
    
    n1 = Number(readlineSync.question('Digite o primeiro numero: '));
    n2 = Number(readlineSync.question('Digite o segundo numero: '));

    const maxDecimals = Math.max(countDecimals(n1), countDecimals(n2)); //conta o número máximo de casas decimais dos número fornecidos
    

    result = (n1 - n2).toFixed(maxDecimals); //formata o número de casas decimais de acordo com o número máximo de casas decimais dos números fornecidos

    console.log(`Resultado: ${n1} - ${n2} = ${result}`);
}

//@author: Wilson rocha
//@description: Função para contar as casas decimais em um número
const countDecimals = (number) => {
    if (Math.floor(number)=== number) return 0;
    return number.toString().split('.')[1].length || 0;
}


//MAIN
calculadora();