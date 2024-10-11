
function fatorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * fatorial(n - 1);
}

function main() {
    let numero = 6;  
    let resultado = fatorial(numero);
    console.log(`A fatorial de ${numero} é ${resultado}`);
}

main();
