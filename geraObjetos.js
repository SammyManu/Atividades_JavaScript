const readline = require('readline');

const nomes = ['Samilly', 'Fabricio', 'Malenia', 'Pingu', 'Kiara', 'Matilda', 'Mel', 'Izabela', 'Fadinha', 'Remo'];


function geraObjetos(numero) {
    const lista = []; 

    for (let i = 0; i < numero; i++) {
        // Gerar um id único
        const id = i + 1;
        // Selecionar um nome aleatório da lista
        const nome = nomes[Math.floor(Math.random() * nomes.length)];
        // Gerar uma idade aleatória entre 18 e 90
        const idade = Math.floor(Math.random() * (90 - 18 + 1)) + 18;

        lista.push({ id, nome, idade });
    }
    
    return lista;
}

function calcMedia(listaObj) {
    if (listaObj.length === 0) {
        return 0;
    }

    let somaIdades = 0;
    for (const objeto of listaObj) {
        somaIdades += objeto.idade;
    }

    return somaIdades / listaObj.length;
}

function ordenarLista(listaObjetos, atributo) {
    return listaObjetos.sort((a, b) => {
        if (a[atributo] < b[atributo]) return -1;
        if (a[atributo] > b[atributo]) return 1;
        return 0;
    });
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function main() {

    rl.question('Digite a quantidade de objetos a serem gerados: ', (input) => {
        const numero = parseInt(input);
        if (isNaN(numero) || numero <= 0) {
            console.log('Por favor, insira um valor válido.');
            rl.close();
            return;
        }

        const listaObj = geraObjetos(numero);
        console.log('Lista de objetos gerados:', listaObj);

        const mediaIdade = calcMedia(listaObj);
        console.log(`A média de idades é ${mediaIdade.toFixed(2)}`);

        rl.question('Deseja ordenar a lista por qual atributo? (id, nome, idade)? ', (atributo) => {
            if (!['id', 'nome', 'idade'].includes(atributo)) {
                console.log('Valor inválido. Use "id", "nome" ou "idade".');
            } else {
                const listaOrdenada = ordenarLista(listaObj, atributo);
                console.log(`Lista ordenada por ${atributo}:`, listaOrdenada);
            }

            rl.close();
        });
    });
}

main();