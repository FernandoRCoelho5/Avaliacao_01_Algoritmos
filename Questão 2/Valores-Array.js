//Algoritmo para o usuario informar os valores de um array multidimensional 3x3

const readline = require('readline-sync');

let array = [];

// Solicitar ao usuário que insira os valores para o array 3x3
for (let i = 0; i < 3; i++) {
    array[i] = [];
    for (let j = 0; j < 3; j++) {
        let valor = Number(readline.question(`Insira o valor para a posicao [${i + 1}, ${j + 1}]: `));
        array[i][j] = valor;
    }
}

// Exibir o array em formato de tabela
console.log('\nArray 3x3:');
for (let i = 0; i < 3; i++) {
    let linha = '';
    for (let j = 0; j < 3; j++) {
        linha += array[i][j] + '\t';
    }
    console.log(linha);
}
console.log('');

let opcao;
do {
    console.log('Escolha uma opção:');
    console.log('1 - Somar todos os valores da linha 1');
    console.log('2 - Multiplicar os valores das diagonais da matriz');
    console.log('3 - Mostrar quantidade e os números pares do array');
    console.log('4 - Finalizar');
    opcao = readline.question('Opcao: ');

    switch (opcao) {
        case '1':
            // Somar todos os valores da linha 1 (índice 0)
            let soma = array[0].reduce((acc, val) => acc + val, 0);
            console.log(`Soma dos valores da linha 1: ${soma}\n`);
            break;
        case '2':
            // Multiplicar os valores das diagonais principais e secundárias
            let diagPrincipal = array[0][0] * array[1][1] * array[2][2];
            let diagSecundaria = array[0][2] * array[1][1] * array[2][0];
            console.log(`Multiplicação da diagonal principal: ${diagPrincipal}`);
            console.log(`Multiplicação da diagonal secundária: ${diagSecundaria}\n`);
            break;
        case '3':
            // Mostrar quantidade e os números pares do array
            let pares = [];
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    if (array[i][j] % 2 === 0) {
                        pares.push(array[i][j]);
                    }
                }
            }
            console.log(`Quantidade de números pares: ${pares.length}`);
            console.log(`Números pares: ${pares.join(', ')}\n`);
            break;
        case '4':
            console.log('Finalizando o programa...');
            break;
        default:
            console.log('Opção inválida. Tente novamente.\n');
    }
} while (opcao !== '4');
