const idade = 28;
const nome = 'Fabio';
let podeEntrar = false;

// || = se a idade for maior ou igual à 18, OU se o nome da pessoa for Fabio ela pode entrar
// && = se a idade for maior ou igual à 18 E se o nome da pessoa for Fabio ela pode entrar

if(idade >= 18 && nome === 'Fabio'){
    podeEntrar = true;
    console.log('ENTROU!')
}else{
    console.log('NÃO ENTRA!!!');
}

console.log('O usuário pode entrar', podeEntrar);