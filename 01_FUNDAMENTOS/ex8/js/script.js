const operador = prompt('Informe a operação que deseja realizar:\n+ | - | * | / ');
const numA = Number(prompt('Agora, digite o primeiro número:'));
const numB = Number(prompt('Digite o segundo número:'));

const operacao = calcular(operador, numA, numB);

console.log(operacao);

function calcular(operador, numA, numB) {

    let resultado;

    switch(operador) {
        case '+':
            resultado = numA + numB;
            break;
        case '-':
            resultado = numA - numB;
            break;
        case '*':
            resultado = numA * numB;
            break;
        case "/":
            resultado = numA / numB;
            break;
        default:
            return 'Operador inválido!';
    }
    return `O resultado da operação é ${resultado}`;
}