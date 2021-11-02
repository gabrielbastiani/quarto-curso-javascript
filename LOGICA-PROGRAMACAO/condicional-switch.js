let diaSemana = 3
if (diaSemana === 0) {
    console.log("Hoje é domingo")
} else if (diaSemana === 1) {
    console.log("hoje é segunda");
} else if (diaSemana === 2) {
    console.log("hoje é terça")
} else if (diaSemana === 3) {
    console.log("hoje é quarta")
} else if (diaSemana === 4) {
    console.log("hoje é quinta")
} else if (diaSemana === 5) {
    console.log("hoje é sexta")
} else if(diaSemana === 6){
    console.log("hoje é sabado")
} else{
    console.log("hoje é --")
}

let dia = "";
switch (diaSemana) {
    case 0:
        dia = "segunda";
        break;
    case 1:
        dia = "terça";
        break;
    case 2:
        dia = "quarta";
        break;
    case 3:
        dia = "quinta";
        break;
    case 4:
        dia = "sexta";
        break;
    case 5:
        dia = "sabado";
        break;
    case 6:
        dia = "domingo";
        break;
    default:
        dia = "--"
}

console.log(`Hoje é ${dia}`)