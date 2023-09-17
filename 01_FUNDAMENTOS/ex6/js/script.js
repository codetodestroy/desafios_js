const idade = Number(prompt('Informe a sua idade: '));

const classificacao = classificarIdade(idade);

if(classificacao !== 'Idade inválida') {
    console.log(`Você tem ${idade} ano(s) de idade e é classificado como ${classificacao}`);
} else {
    console.log(classificacao);
}

function classificarIdade(idade) {
    if(idade < 0) return 'Idade inválida';

    if (idade >= 0 && idade <= 12) return 'Criança';
    else if (idade >= 13 && idade <= 17) return 'Adolescente';
    else if (idade >= 18 && idade <= 59) return 'Adulto';
    else return 'Idoso';
}