const saludar = ()=>{
    console.log("funcion flecha");
}
saludar();  

const duplicar = (numero) => {
    return numero * 2;
}
console.log(duplicar(5));

const sumar = (a,b) => {
    return a + b;
}
console.log(sumar(5,10));

const crearUsusario = (nombre, edad) => ({nombre: nombre, edad: edad});
console.log(crearUsusario("Juan", 30));

const numeros = [1,2,3,4,5];
//funcion filtrar

const procesarNumeros = (numeros) => {
    return numeros
    .filter(numero=>numero >10)
    .map(numero => numero*2)
};

const resultado = procesarNumeros(numeros);
console.log(resultado);
/////
const Usuarios = [
    {nombre: "Juan", edad: 30},
    {nombre: "Maria", edad: 25},
    {nombre: "Pedro", edad: 35},
    {nombre: "Ana", edad: 15}
];

const procesarUsuarios = (usuarios) => {
    return usuarios
    .filter(usuario => usuario.edad > 18)//filtrar usuarios mayores de 18
    .map(usuario=>{
        const {nombre}= usuario;
        return nombre.length >5 ? nombre.toUpperCase() : nombre.toLowerCase();
    })
};
const result2=procesarUsuarios(Usuarios);
console.log(result2);