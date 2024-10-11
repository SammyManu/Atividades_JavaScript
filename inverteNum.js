const readline = require('readline');

function inverteNum(num) {
    const numInvertido = num.toString().split('').reverse().join('');  // Converte o número para string, inverte e junta de volta
    return parseInt(numInvertido);
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function main() {
    rl.question('Digite o número que deseja inverter: ', (numero) => {
        const num = parseInt(numero);

        if (isNaN(num)) {
            console.log('Valor inválido.');
        } else {
            const numInvertido = inverteNum(num);
            console.log(`Número invertido: ${numInvertido}`);
        }

        rl.close();
    });
}

main();
