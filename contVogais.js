const readline = require('readline');

function contVogais(string) {
    const vogais = 'aeiouAEIOU';
    let cont = 0;

    for (let char of string) {
        if (vogais.includes(char)) {
            cont++;
        }
    }
    
    return cont;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function main() {
    rl.question('Digite uma string para contar as vogais: ', (string) => {
        const qtdVogais = contVogais(string);
        console.log(`Número de vogais na string: ${qtdVogais}`);
        
        rl.close();
    });
}

main();
