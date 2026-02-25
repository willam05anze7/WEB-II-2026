const productos = [
    {nombre: "Laptop", precio: 1000},
    {nombre: "Mouse", precio: 50},
    {nombre: "Teclado", precio: 80}
];

function sumarPropiedad(arr, propiedad){
    let suma = 0;

    for(let i = 0; i < arr.length; i++){
        suma += arr[i][propiedad];
    }

    return suma;
}

console.log(sumarPropiedad(productos, "precio"));

const sumarPropiedad2 = (arr, propiedad) => {
    let suma = 0;

    for(let obj of arr){
        suma += obj[propiedad];
    }

    return suma;
};

console.log(sumarPropiedad2(productos, "precio"));