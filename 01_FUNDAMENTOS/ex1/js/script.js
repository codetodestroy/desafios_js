let opcao = Number(prompt('Qual temperatura deseja fazer a conversão? \n\n1 - Celsius para Fahrenheit\n2 - Fahrenheit para Celsius\n'));

switch(opcao) {
    case 1:
        let celsius = Number(prompt('Certo, você quer converter de Celsius para Fahrenheit!\n\nDigite a temperatura em CELSIUS:')); 
        console.log(celsius + '°C equivalem a ' + converterParaFahrenheit(celsius) + '°F');
        break;
    case 2:
        let fahrenheit = Number(prompt('Certo, você quer converter de Fahrenheit para Celsius!\n\nDigite a temperatura em FAHRENHEIT:')); 
        console.log(fahrenheit + '°F equivalem a ' + converterParaCelsius(fahrenheit) + '°C');
        break;
    default:
        resultado.innerText = 'Opção inválida!';
        break;
}

function converterParaFahrenheit(temperaturaEmCelsius) {
    return (temperaturaEmCelsius * 9 / 5) + 32;
}

function converterParaCelsius(temperaturaEmFahrenheit) {
    return (temperaturaEmFahrenheit - 32) * 5 / 9;
}