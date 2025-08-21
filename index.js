function multiplicar(num1, num2) {
    return num1 * num2;
}
function saudacao(nome) {
    return "Ol\u00E1 ".concat(nome);
}
var resultadoMultiplicacao = multiplicar(5, 10);
var mensagemSaudacao = saudacao("rafael");
console.log("Resultado da multiplica\u00E7\u00E3o: ".concat(resultadoMultiplicacao));
console.log("Mensagem de sauda\u00E7\u00E3o: ".concat(mensagemSaudacao));
