let comprimento, largura;

comprimento = Number(prompt('Informe o comprimento do retângulo:'));
largura = Number(prompt('Informe a largura do retângulo:'));

let area = calcularArea(comprimento, largura);
let perimetro = calcularPerimetro(comprimento, largura);

alert(`Área: ${area} \nPerímetro: ${perimetro}`);

function calcularArea(comprimento, largura) {
    return comprimento * largura;
}

function calcularPerimetro(comprimento, largura) {
    return 2 * (comprimento + largura);
}