//função de soma
/**
 * @author Paulo Victor
 * @date 2023/10/13
 * @description função responsável pelo calculo de soma
 */

// Função de soma
function somar() {
    const num1 = parseFloat(readlineSync.question("Primeiro número: ")); //Solicita ao usuario o número faz leitura como string e o parseFloat converte a string para um númeor decimal
	const num2 = parseFloat(readlineSync.question("Segundo número: ")); 

	if (!isNaN(num1) && !isNaN(num2)) { //Verifica se os valores inseridos são números ou não
		const resultado = num1 + num2; //Soma os valores inseridos pelo usuário e armazena na variável resultado
		console.log(`O resultado da soma é: ${resultado}`); //Exibe o resultado da soma na tela 
	} else {
		console.log('Entrada inválida. Por favor, insira números válidos.'); //Exibe mensagem de erro caso o usuário insira um valor inválido	
	}
}


module.exports = somar