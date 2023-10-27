//função de divisão
/**
 * @author Luisa Nievas
 * @date 2023/10/13
 * @description função responsável pelo cálculo de divisão
 */

function dividir (dividendo, divisor) {
	let result;

	dividendo = Number(dividendo);
	divisor = Number(divisor);

    let retornar;

	if( dividendo && divisor !== 0 ){
		result = dividendo / divisor
		retornar = `\nResultado: ${result}\n`;
	}else{
		retornar = '\nErro ao tentar executar a divisão. Verifique se inseriu os números corretamente.\n';
	}

    return console.log(retornar)

}

module.exports = dividir