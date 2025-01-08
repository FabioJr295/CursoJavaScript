const quantidade = 10
let soma = 1;

// for = looping, (i) está começando no valor de 0, então ele vai rodar até chegar no total de 10 valores (quantidade)
// i++ = i = i +1, então enquanto i (o número de vezs que o looping irá rodar) for menor que a quantidade, o looping irá continuar

for(let i = 0; i < quantidade; i++){
    console.log(i);
    soma = soma + i;
}

console.log('Acabou!', soma);