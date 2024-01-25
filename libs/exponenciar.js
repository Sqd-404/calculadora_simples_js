//função de exponenciação
/**
 * @author Ilnara Ackermann
 * @date 2023/10/13
 * @description função responsável pelo calculo de exponenciações
 */
function exponenciar(readlineSync) {
	const num1 = readlineSync.question("numero base: ");
	const num2 = readlineSync.question("numero do expoente: ");
	const resultado = num1 ** num2;
	console.log(`Resultado: ${resultado}`);
}
module.exports = exponenciar;