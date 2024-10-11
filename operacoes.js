const readline = require('readline');

function operacoes(v1, v2, operacao) {
    if (isNaN(v1) || isNaN(v2)) {
        console.log("Valores inválidos.")
        return null;
    }
    
    switch (operacao) {
        case '1':
            return (v1 + v2);
        case '2':
            return (v1 - v2);
        case '3':
            return (v1 * v2);
        case '4':
            if (v2 === 0) {
                console.log("Erro: Divisão por zero é inválida.");
                return null;
            }
            return (v1 / v2);
        default:
            console.log("Erro: Opção inválida. Escolha um dos números que representam as operações.");
            return null;
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function main() {
    rl.question('Escolha a operação (1- adição, 2- subtração, 3- multiplicação, 4- divisão): ', (operacao) => {
        rl.question('Digite o primeiro valor: ', (v1) => {
            rl.question('Digite o segundo valor: ', (v2) => {
                const resultado = operacoes(parseFloat(v1), parseFloat(v2), operacao);

                if (resultado !== null) {
                    console.log(`Resultado: ${resultado}`);
                }

                rl.close();
            });
        });
    });
}


main();
