const exponenciar = require("./exponenciar");
const multiplyFunction = require('./multiplication.js');
const multiplicar = multiplyFunction.multiplicar;
const subtrair = require('./subtraction');
const dividir = require('./division');
const somar = require('./somar.js')
const descobrirRaiz = require('./raiz')

module.exports = {somar, exponenciar, multiplicar, subtrair, dividir, descobrirRaiz}