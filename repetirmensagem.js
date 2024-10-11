function repetirMsg(msg, n) {
    let saida = '';
    for (let i = 0; i < n; i++) {
        saida += msg + ' ';
    }
    return saida.trim();
}

function main(){
    let saida = repetirMsg("casa suja chao sujo", 3);
    console.log(saida);
}

main ();