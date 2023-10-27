// //importando funções da lib
const { somar, exponenciar, multiplicar, subtrair, dividir, descobrirRaiz } = require("./libs/index");

//importando modulo readline
const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
  });

//Criação do menu principal da calculadora
/**
 * @author Ilnara Ackermann
 * @date 2023/10/13
 * @description Menu básico para o funcionamento da calculadora
 */
function exibirMenu() {
	console.log("Escolha uma opção:");
	console.log("1 - Soma");
	console.log("2 - Subtração");
	console.log("3 - Multiplicação");
	console.log("4 - Divisão");
	console.log("5 - Exponenciação");
	console.log("6 - Radiciação");
	console.log("7 - Sair");

	rl.question("Opção: ", (opcao) => {
		switch (opcao) {
			case "1":
				console.log("\nOpção escolhida: Soma\n")
				rl.question("Digite o primeiro número: ", (adendo1) => {
					rl.question("Digite o segundo número: ", (adendo2) => {
						somar(adendo1, adendo2);
						exibirMenu();
					});
				});
				break;
			case "2":
				console.log("\nOpção escolhida: Subtração\n")
				rl.question("Digite o minuendo: ", (minuendo) => {
					rl.question("Digite o subtraendo: ", (subtraendo) => {
						subtrair(minuendo, subtraendo);
						exibirMenu();
					});
				});
				break;
			case "3":
				console.log("\nOpção escolhida: Multiplicação\n")
				rl.question("Digite o primeiro número: ", (fator1) => {
					rl.question("Digite o segundo número: ", (fator2) => {
						multiplicar(fator1, fator2);
						exibirMenu();
					});
				});
				break;
			case "4":
				console.log("\nOpção escolhida: Divisão\n")
				rl.question("Digite o dividendo: ", (dividendo) => {
					rl.question("Digite o divisor: ", (divisor) => {
						dividir(dividendo, divisor);
						exibirMenu();
					});
				});
				break;
			case "5":
				console.log("\nOpção escolhida: Exponenciação\n")
				rl.question("Digite a base: ", (base) => {
					rl.question("Digite o expoente: ", (expoente) => {
						exponenciar(base, expoente);
						exibirMenu();
					});
				});
				break;
			case "6":
				console.log("\nOpção escolhida: Radiciação\n")
				rl.question("Digite o índice: ", (indice) => {
					rl.question("Digite o radicando: ", (radicando) => {
						descobrirRaiz(indice, radicando);
						exibirMenu();
					});
				});
				break;
			case "7":
				console.log("\nSaindo do programa...");
				rl.close();
        		break;
			default:
				console.log("Opção inválida, tente novamente.");
				exibirMenu();
			}
	});
}


exibirMenu();