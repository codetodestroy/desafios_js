const num1 = Number(prompt('Informe o número 1:'));
const num2 = Number(prompt('Informe o número 2:'));

const divisivel = verificarDivisibilidade(num1, num2);

console.log(`O número ${num1} é dívisível por ${num2}? ${divisivel ? "Sim" : "Não"}`);

function verificarDivisibilidade(num1, num2) {
    return (num1 % num2) === 0;
}