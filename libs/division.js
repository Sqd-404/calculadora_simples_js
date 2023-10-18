const readlineSync = require("readline-sync");

//função de divisão
/**
 * @author Luisa Nievas
 * @date 2023/10/13
 * @description função responsável pelo cálculo de divisão
 */

exports.dividir = (num1, num2) =>{
	let result;

	num1 =  Number(readlineSync.question('Primeiro valor: '));
	num2 =  Number(readlineSync.question('Segundo valor: '));

    let retornar;

	if( num1 && num2 !== 0 ){
		result = num1 / num2
		retornar = `Resultado: ${result}`;
	}else{
		retornar = 'Erro ao tentar executar a divisão. Verifique se inseriu os números corretamente.';
	}

    return console.log(retornar)

}
