const frase = "JavaScript es un lenguaje muy poderoso";

function palabraMasLarga(texto){
    let palabras = texto.split(" ");
    let mayor = "";

    for(let i = 0; i < palabras.length; i++){
        if(palabras[i].length > mayor.length){
            mayor = palabras[i];
        }
    }

    return mayor;
}

console.log(palabraMasLarga(frase));

const palabraMasLarga2 = (texto) => {
    let palabras = texto.split(" ");
    let mayor = "";

    for(let palabra of palabras){
        if(palabra.length > mayor.length){
            mayor = palabra;
        }
    }

    return mayor;
};

console.log(palabraMasLarga2(frase));