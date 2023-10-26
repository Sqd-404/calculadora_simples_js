//@author: Wilson Rocha
//@date: Thu Oct 12 15:38:03 2023
//@description: A função recebe dois valores e retorna a subtração deles
const subtrair = (n1, n2) => {

    let result;
    n1 = Number(n1) 
    n2 = Number(n2)

    const maxDecimals = Math.max(contarDecimais(n1), contarDecimais(n2)); //conta o número máximo de casas decimais dos número fornecidos
    

    result = (n1 - n2).toFixed(maxDecimals); //formata o número de casas decimais de acordo com o número máximo de casas decimais dos números fornecidos

    console.log(`Resultado: ${n1} - ${n2} = ${result}`);
}

//@author: Wilson rocha
//@date: Thu Oct 12 22:37:02 2023
//@description: Função para contar as casas decimais em um número
const contarDecimais = (number) => {
    if (Math.floor(number)=== number) return 0;
    return number.toString().split('.')[1].length || 0;
}


module.exports = subtrair
