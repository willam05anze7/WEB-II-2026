const paisesDestino = "Ecuador";
const paisesDisponibles = ["Argentina", "Brasil", "Chile", "Uruguay", "Paraguay", "Peru", "Colombia", "Ecuador", "Venezuela", "Bolivia"];
let edadPasajero = 17;
let acompaniado = true;
let pasaporte = true;
let casado  = false;

console.log(`verificamos y hay pasaje para: ${paisesDestino}`);

//A && B || C
if (paisesDisponibles.indexOf(paisesDestino)>-1 && edadPasajero >= 18 && pasaporte || !casado)
{
    console.log(`pasaje disponible para venta`);
}else{
    console.log(`pasaje no disponible para venta`);
}