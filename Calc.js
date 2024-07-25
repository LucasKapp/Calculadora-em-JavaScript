let v1 = 5
let v2 = 5
let resultado = 0
let operador = '/'

function adição (soma1,soma2){
    return soma1 + soma2
}
function subtração (soma1,soma2){
    return soma1 - soma2
}
function multiplicação (soma1,soma2){
    return soma1 * soma2
}
function divisão (soma1,soma2){
    return soma1 / soma2
}
if (operador === '+') {
    let soma = adição(v1, v2);
        console.log(soma);
} else if (operador === '-') {
    let subtrair = subtração(v1, v2);
        console.log(subtrair);
} else if (operador === '*') {
    let multiplicar = multiplicação(v1, v2);
        console.log(multiplicar);
} else if (operador === '/') {
    let dividir = divisão(v1, v2);
        console.log(dividir);
} else {
        console.log("Operador inválido.");
 }
