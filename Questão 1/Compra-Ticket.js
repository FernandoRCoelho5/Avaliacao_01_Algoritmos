// Compra de Ticket Cinema

const readline = require('readline-sync');

// Função para exibir o mapa de assentos
function exibirMapaAssentos(assentos) {
    console.log('Mapa de Assentos:');
    console.log('   1  2  3  4');
    for (let i = 0; i < assentos.length; i++) {
        let linha = String.fromCharCode(65 + i) + ' ';
        for (let j = 0; j < assentos[i].length; j++) {
            linha += assentos[i][j] + '  ';
        }
        console.log(linha);
    }
    console.log('');
}

// Função para verificar se o assento está disponível
function assentoDisponivel(assentos, linha, coluna) {
    return assentos[linha][coluna] === 'L';
}
// Função para reservar o assento
function reservarAssento(assentos, linha, coluna) {
    assentos[linha][coluna] = 'X';
}
// Função para verificar se ainda há assentos disponíveis
function haAssentosDisponiveis(assentos) {
    for (let i = 0; i < assentos.length; i++) {
        for (let j = 0; j < assentos[i].length; j++) {
            if (assentos[i][j] === 'L') { // Corrigido para 'L'
                return true;
            }
        }
    }
    return false;
}
// Inicialização do mapa de assentos (L = Livre, X = Ocupado)
let assentos = [
    ['L', 'L', 'L', 'L'],
    ['L', 'L', 'L', 'L'],
    ['L', 'L', 'L', 'L'],
    ['L', 'L', 'L', 'L']
];

exibirMapaAssentos(assentos);

while (haAssentosDisponiveis(assentos)) {
    let assentoValido = false;
    while (!assentoValido) {
        console.clear(); // Limpa a tela antes de mostrar o mapa atualizado
        exibirMapaAssentos(assentos);

        // Solicitar ao usuário a seleção do assento
        let input = readline.question('Selecione seu assento (Exemplo: A1, B2): ').toUpperCase();
        let linha = input.charCodeAt(0) - 65;
        let coluna = parseInt(input[1]) - 1;

        // Validar a entrada do usuário
        if (linha >= 0 && linha < 4 && coluna >= 0 && coluna < 4) {
            if (assentoDisponivel(assentos, linha, coluna)) {
                reservarAssento(assentos, linha, coluna);
                assentoValido = true;
                console.log(`Assento ${input} reservado com sucesso!`);
            } else {
                console.log(`Assento ${input} já está reservado. Por favor, escolha outro assento.`);
            }
        } else {
            console.log('Entrada inválida. Por favor, selecione um assento válido (ex: A1, B3).');
        }
    }
}

console.log('Todos os assentos foram reservados!');