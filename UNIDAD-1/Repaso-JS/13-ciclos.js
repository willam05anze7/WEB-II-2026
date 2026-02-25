const paisesDisponibles = ["Argentina", "Brasil", "Chile", "Uruguay", "Paraguay", "Peru", "Colombia", "Ecuador", "Venezuela", "Bolivia"];
const preciopaises = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
const presupuesto = 250;

let i = 0;

while(preciopaises[i] < presupuesto && i < preciopaises.length){
    i++;
}
if (i== paisesDisponibles.length){
    console.log(`no existe pasaje disponible `);
}else {
    console.log(`puedes comprar el pasaje `);
}