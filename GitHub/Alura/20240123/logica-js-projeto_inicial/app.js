/*
alert('Boas-vindas ao jogo do número secreto');
let numeroSecreto = 5;
prompt('Escolha um número entre 1 e 10');
*/

/*
alert('Boas-vindas ao jogo do número secreto');
let numeroSecreto = 5;
let chute = prompt('Escolha um número entre 1 e 10');

if (chute == numeroSecreto) {
    console.log("Isso aí! você descobriu o número secreto (5)");
}
*/

/*
let numeroDeVendas = 50;
let saldoDisponivel = 1000;
let mensagemDeErro = 'Erro! Preencha todos os campos';
let mensagem = 'Pode tirar a habilitação!';
let mensagem2 = 'Não pode tirar a habilitação!';
let nome = "";
let idade = "";

nome = prompt('Digite o seu nome');
idade = prompt('Digite o sua idade');

if (nome == "" || idade == "" || isNaN(idade)) {
    alert(mensagemDeErro);
} else {
    if (idade >= 18) {
        alert(mensagem);
    } else {
        alert(mensagem2);        
    }
}
*/

/* 
alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
// console.log(numeroSecreto);
let chute = prompt('Escolha um número entre 1 e 10');

// se chute for igual ao número secreto
if (chute == numeroSecreto) {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);
} else {
    alert('Você errou :(')
}
*/

/*
alert('Boas vindas ao jogo do número secreto');

// Adicione um console.log para verificar o valor de "chute" após a entrada do usuário
let chute = prompt('Escolha um número entre 1 e 10');
console.log('Valor do chute:', chute);

let numeroSecreto = 4;

// Adicione um console.log para verificar a comparação entre "chute" e "numeroSecreto"
console.log('Resultado da comparação:', chute == numeroSecreto);

if (chute == numeroSecreto) {
    alert('Acertou');
} else {
    // Adicione um console.log para verificar o valor de "numeroSecreto" quando o jogador erra
    console.log('Valor do número secreto:', numeroSecreto);
    alert('O número secreto era ' + numeroSecreto);
}
*/

/*
let diaDaSemana = prompt('Qual é o dia da semana?').toUpperCase();

if (diaDaSemana == '') {
    alert('Erro! Preencha todos os campos');
} else {
    if (diaDaSemana == 'SÁBADO' || diaDaSemana == 'SABADO' || diaDaSemana == 'DOMINGO') {
        alert('Bom fim de semana!');
    } else {
        alert('Boa semana!');
    }
}

let numero = prompt('Digite um número');

if (numero > 0) {
    alert('O número digitado é positivo!');
} else if (numero < 0){
    alert('O número digitado é negativo!');
} else {
    alert(`O número digitado é ${numero}!`);
}

let pontuacao = prompt('Digite, quantos pontos você marcou?');

pontuacao >= 100 ? alert('Parabéns, você venceu!') : alert('Tente novamente para ganhar.');

let saldoDisponivel = 1000;

alert(`Seu saldo é de ${saldoDisponivel}`);

let mensagem = 'Boas-vindas';
let mensagemDeErro = 'Erro! Preencha o seu nome';
let nome = prompt('Digite seu nome');

nome == '' ? alert(mensagemDeErro) : alert(`${mensagem} ${nome}!`);
*/

// código omitido

/*alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto chute não for igual ao n.s.
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 100');
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
    }
}

// código omitido
*/

/*
let contador = 1;

while (contador <= 10) {
    alert(contador);
    contador++;
}

contador = 10;

while (contador >= 1) {
    alert(contador);
    contador--;
}

contador = prompt('Digite um número positivo por favor');

if (isNaN(contador) || contador == ''|| contador <= 0) {
    alert('Por favor, digite um número positivo válido!');
} else {
    while (contador >= 0) {
        alert(contador);
        contador--;
    }
}
*/

/*contador = prompt('Digite um número positivo por favor');
let vlr = 0;

if (isNaN(contador) || contador == ''|| contador <= 0) {
    alert('Por favor, digite um número positivo válido!');
} else {
    while (vlr <= contador) {
        alert(vlr);
        vlr++;
    }
}
*/

let mensagemBoasVindas = 'Boas vindas';
let nome = 'Jeferson';
let linguagem;
let valor1 = 1;
let valor2 = 2;
let resultado = valor1 + valor2;
let idade;
let numero;
let valor;
let nota;
let numeroAleatorio = Math.random();

// alert(`Olá, ${nome}!`);
// linguagem = prompt(`Qual a linguagem de programação que você mais gosta ${nome}?`);

console.log(`${mensagemBoasVindas} ${nome}!`);
console.log(`${linguagem} é a linguem que você mais gosta!`);
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.!`);
console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}.!`);

// idade = prompt(`Qual a sua idade?`);

// idade == '' || isNaN(idade) ? alert(`Por favor, digite uma idade válida`)
// : idade >= 18 ? alert(`${nome}, você é maior de idade`) : alert(`${nome}, você é menor de idade`);

// numero = prompt(`Digite um valor numérico`);


// numero == '' || isNaN(numero) ? alert(`Por favor, digite número válido`)
// : numero > 0 ? alert(`${nome}, este valor é positivo`)
// : numero < 0 ? alert(`${nome}, este valor é negativo`)
// : alert(`${nome}, você digitou ZERO`);

/*
valor = 1;

while (valor <= 10) {
    console.log(valor);
    valor++;
}

nota = 10;

if (nota >= 7) {
    console.log('Aprovado')
} else {
    console.log('Reprovado')
}

console.log(numeroAleatorio);
console.log(parseInt(numeroAleatorio * 10) + 1);
console.log(parseInt(numeroAleatorio * 1000) + 1);
*/

/*
let numeroSecreto = parseInt(Math.random() * 11);
let tentativas = 0;
let chute;

alert('Boas vindas ao jogo do número secreto');

while (chute != numeroSecreto) {
    let chute = prompt('Escolha um número entre 1 e 10');
    if (chute === numeroSecreto) {
        tentativas++;
        break;
    } else {
        if (chute > numeroSecreto) {
            tentativas++;
            alert('O número secreto é menor');
        } else {
            tentativas++;
            alert('O número secreto é maior');
        }
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`O número secreto era ${numeroSecreto} e você acertou com apenas ${tentativas} ${palavraTentativa}`)
*/