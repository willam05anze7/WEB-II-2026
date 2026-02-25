const paisesDestino = "Ecuador";
const paisesDisponibles = ["Argentina", "Brasil", "Chile", "Uruguay", "Paraguay", "Peru", "Colombia", "Ecuador", "Venezuela", "Bolivia"];
let acompaniado = true;
let edadPasajero = 17;


if (paisesDisponibles.indexOf(paisesDestino))
{
    if (edadPasajero <= 18)
    {
        if (acompaniado === true)
        {
            console.log(`Pasaje disponible para menor de edad acompañado`);
        }
    }
}
else{
    console.log(`Pasaje no disponible para venta`);
}
