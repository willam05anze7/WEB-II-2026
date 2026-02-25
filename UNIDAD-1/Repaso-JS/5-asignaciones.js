// const no cambia su valor, es decir, no se puede reasignar
// despues de ser asignado en el espacio de memoria, pero si se puede modificar su contenido si es un objeto o un array

const nombre = "Juan";
console.log(nombre);

const var1 = "juan";
const var2 = "Leo";
console.log(var1);
console.log(var2);

//let puede cambiar durante la efectuacion del programa, es decir, se puede reasignar a otro valor
let compuesto = var1 + " " + var2;
console.log(compuesto);