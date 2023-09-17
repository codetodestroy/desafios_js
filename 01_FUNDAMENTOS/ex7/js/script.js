const num1 = Number(prompt('Informe o número 1:'));
const num2 = Number(prompt('Informe o número 2:'));

const comparacao = compararNumeros(num1, num2);

console.log(`O número ${num1} é ${comparacao} comparado ao número ${num2}`);

function compararNumeros(num1, num2) {
    if(num1 > num2) return 'maior';
    else if (num1 < num2) return 'menor';
    else return 'igual';
}