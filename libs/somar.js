//função de soma
/**
 * @author Paulo Victor
 * @date 2023/10/13
 * @description função responsável pelo calculo de soma
 */

// Função de soma
function somar(adendo1,adendo2) {

	if (!isNaN(adendo1) && !isNaN(adendo2)) { //Verifica se os valores inseridos são números ou não
			adendo1 = parseFloat(adendo1); //Solicita ao usuario o número faz leitura como string e o parseFloat converte a string para um númeor decimal
		 	adendo2 = parseFloat(adendo2); 
		const resultado = adendo1 + adendo2; //Soma os valores inseridos pelo usuário e armazena na variável resultado
		console.log(`\nO resultado da soma é: ${resultado}\n`); //Exibe o resultado da soma na tela 
	} else {
		console.log('\nEntrada inválida. Por favor, insira números válidos.\n'); //Exibe mensagem de erro caso o usuário insira um valor inválido	
	}
}


module.exports = somar