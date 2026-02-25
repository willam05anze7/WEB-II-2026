const valorPasaje = 1000;
if (valorPasaje == 1000)
    {
    console.log(`el pasaje es correcto`);
    } 

const paisesDestino = "Ecuador";
const paisesDisponibles = ["Argentina", "Brasil", "Chile", "Uruguay", "Paraguay", "Peru", "Colombia", "Ecuador", "Venezuela", "Bolivia"];

let edadPasajero = 17;
let acompaniado = true;

console.log(`pasajes para ${paisesDestino}`);
if ((paisesDisponibles.indexOf(paisesDestino)>-1 && (edadPasajero >= 18 || acompaniado)))
{
    console.log(`pasaje disponible para venta`);
}
else
{
    console.log(`pasaje no disponible para venta`);
}