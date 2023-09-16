let nome = prompt('Qual é o seu nome?');
let idade = prompt('Qual é a sua idade?'); 
let cidade = prompt('Em qual cidade você mora?');

const mensagem = console.log(criarMensagem(nome, idade, cidade));

console.log(mensagem);

function criarMensagem(nome, idade, cidade) {
    return `Meu nome é ${nome}, tenho ${idade} anos de idade e moro na ${cidade}`;
}