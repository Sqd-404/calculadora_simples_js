//@author: Wilson Rocha
//@date: Thu Oct 12 15:38:03 2023
//@description: A função recebe dois valores e retorna a subtração deles
const subtrair = (minuendo, subtraendo) => {

    let result;
    minuendo = Number(minuendo) 
    subtraendo = Number(subtraendo)

    const maxDecimals = Math.max(contarDecimais(minuendo), contarDecimais(subtraendo)); //conta o número máximo de casas decimais dos número fornecidos
    

    result = (minuendo - subtraendo).toFixed(maxDecimals); //formata o número de casas decimais de acordo com o número máximo de casas decimais dos números fornecidos

    console.log(`\nResultado: ${minuendo} - ${subtraendo} = ${result}\n`);
}

//@author: Wilson rocha
//@date: Thu Oct 12 22:37:02 2023
//@description: Função para contar as casas decimais em um número
const contarDecimais = (number) => {
    if (Math.floor(number)=== number) return 0;
    return number.toString().split('.')[1].length || 0;
}


module.exports = subtrair
