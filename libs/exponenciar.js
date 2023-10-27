//função de exponenciação
/**
 * @author Ilnara Ackermann
 * @date 2023/10/13
 * @description função responsável pelo calculo de exponenciações
 */
function exponenciar(base, expoente) {
	base =  Number(base);
	expoente =  Number(expoente);
	const resultado = base ** expoente;
	console.log(`\nResultado: ${resultado}\n`);
}
module.exports = exponenciar;