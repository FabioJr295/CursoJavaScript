// Arrays =  armazenam os dados em uma variavel só e podemos colocar quantos dados a gente quiser (lembrando que ele começa do numero 0 e ai sim sucessivamente. 0, 1, 2, 3...)
// lenght = para saber quantos dados tem dentro deste array

const idades = [18, 14, 53, 60, 100, 5344, 555, 234, 539, 743, 1245, 7543];

// enquanto i for menor do que 12 (a quantidade de numeros dentro do array) ele continuará executando o mesmo

for(let i = 0; i < idades.length; i++){
    console.log('Resultado: ', idades[i]);
}