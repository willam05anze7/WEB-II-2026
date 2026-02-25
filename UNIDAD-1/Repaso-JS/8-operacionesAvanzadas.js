const ciudades = new Array("Secre","La paZ","Cochabamba","Santa Cruz","Tarija","Beni","Pando");
console.log(ciudades);
// podemos definir un arra de forma abreviada 
const paises = ["Bolivia","Peru","Argentina","Brasil","Uruguay","Chile","Ecuador"];

let conteoCiudades = ciudades.length;
console.log(`El conteo de ciudades es: ${conteoCiudades}`);

//ejercicios con array 
ciudades.shift();
//elimina el primer elemento del array
console.log(ciudades);

ciudades.pop();
//elimina el ultimo elemento del array
console.log(ciudades);

console.log(paises.join("-"));
//unifca los elemnetos en una caden ade caracteres 
console.log(paises.sort());
//ordena los elementos de forma alfabetica