function calcularIMC(altura, peso) {
    return peso / (altura ** 2);
}

let altura = Number(prompt('Informe a sua altura:\n'));
let peso = Number(prompt('Agora, informe o seu peso:\n'));

alert('Seu IMC é ' + calcularIMC(altura, peso).toFixed(2));