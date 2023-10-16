//importando modulo readline-sync
const readlineSync = require("readline-sync");
//Criação do menu principal da calculadora
/**
 * @author Ilnara Ackermann
 * @date 2023/10/13
 * @description Menu básico para o funcionamento da calculadora
 */
function exibirMenu() {
	while (true) {
		console.log("Escolha uma opção:");
		console.log("1 - Soma");
		console.log("2 - Subtração");
		console.log("3 - Multiplicação");
		console.log("4 - Divisão");
		console.log("5 - Exponenciação");
		console.log("6 - Radiciação");
		console.log("7 - Sair");
		const opcao = readlineSync.question("Opção: ");
		switch (opcao) {
			case "1":
				somar();
				break;
			case "2":
				subtrair();
				break;
			case "3":
				multiplicar();
				break;
			case "4":
				dividir();
				break;
			case "5":
				exponenciar();
				break;
			case "6":
				radiciar();
				break;
			case "7":
                console.log("Saindo do programa...");
				return;
			default:
				console.log("Opção inválida, tente novamente.");
		}
	}
}
//função de divisão
/**
 * @author Luisa Nievas
 * @date 2023/10/13
 * @description função responsável pelo cálculo de divisão
 */

const dividir = (num1, num2) =>{
	let result;

	num1 =  Number(readlineSync.question('Digite o primeiro número: '));
	num2 =  Number(readlineSync.question('Digite o segundo número: '));

	if( num1 && num2 !== 0 ){
		result = num1 / num2
		console.log(`Resultado: ${result}`);
	}else{
		console.log('Erro ao tentar executar a divisão. Verifique se inseriu os números corretamente.');
	}

}

// exibirMenu();
dividir();
