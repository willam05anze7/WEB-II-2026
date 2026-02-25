const paisesDestino = "Ecuador";
const paisesDisponibles = ["Argentina", "Brasil", "Chile", "Uruguay", "Paraguay", "Peru", "Colombia", "Ecuador", "Venezuela", "Bolivia"];
let valorPasaje = 0;

// if (paisesDestino === "Argentina"){
//     valorPasaje = 100;
// }else if (paisesDestino === "Brasil"){
//     valorPasaje = 200;
// }

switch (paisesDestino) {
    case "Argentina":
        valorPasaje = 100;
        break;
    case "Brasil":
        valorPasaje = 200;
        break;
    case "Chile":
        valorPasaje = 300;
        break;
    default:
        console.log(`pasaje no disponible para venta`);
        break;
}
if (valorPasaje > 0){
    console.log(`pasaje disponible para venta, valor: ${valorPasaje}`);
}