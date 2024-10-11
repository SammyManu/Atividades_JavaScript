
function tabuada(num) {
    let resultados = [];
    for (let i = 1; i <= 10; i++) {
        resultados.push(num * i);  
    }
    return resultados;
}

function main() {
    let num = 9;
    let resultadoTabuada = tabuada(num);
    console.log(`Tabuada do ${num}:`, resultadoTabuada);
}

main();
