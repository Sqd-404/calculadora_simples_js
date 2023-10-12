function descobrirRaiz() {
    let numero = prompt("Digite um número para calcular sua raiz quadrada: ") //criei uma variável para ser o número escolhido pelo usuário
    while (numero < 0){ //Fiz esse laço de repetição para que se o usuário escolher um número inválido, retorne para ele a informação e ele possa escolher um novo número
        numero = prompt('Não existe raiz de número negativo, por favor insira um número válido: ')
    } return alert(`A raiz do número escolhido foi ${Math.sqrt(numero)}`); //Aqui retornará ao usuário o valor da raiz do número escolhido
}

descobrirRaiz();