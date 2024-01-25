//função de soma
/**
 * @author Paulo Victor
 * @date 2023/10/13
 * @description função responsável pelo calculo de soma
 */

// Função de soma
function somar(n1,n2) {

	if (!isNaN(n1) && !isNaN(n2)) { //Verifica se os valores inseridos são números ou não
			n1 = parseFloat(n1); //Solicita ao usuario o número faz leitura como string e o parseFloat converte a string para um númeor decimal
		 	n2 = parseFloat(n2); 
		const resultado = n1 + n2; //Soma os valores inseridos pelo usuário e armazena na variável resultado
		console.log(`O resultado da soma é: ${resultado}`); //Exibe o resultado da soma na tela 
	} else {
		console.log('Entrada inválida. Por favor, insira números válidos.'); //Exibe mensagem de erro caso o usuário insira um valor inválido	
	}
}


module.exports = somar