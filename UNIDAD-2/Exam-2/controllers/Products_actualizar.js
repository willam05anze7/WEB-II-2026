// import { productoService } from "../service/product_service.js";

// const formulario = document.querySelector("[data-form]");

// const obInfo = async()=>{
//     const url = new URL(window.location);
//     const id = (url.searchParams.get("id"));
//     if (id == null){
//         window.location.href="../screens/error.html"
//     }
//     const nombre = document.querySelector("[data-nombre]");
//     const precio = document.querySelector("[data-precio]");
//     const descripcion = document.querySelector("[data-descripcion]");
//     try {
//         const producto = await productoService.producto(id);
//         if(producto.nombre && producto.precio){ //rescato los formularios de json server y los asigno a los formularios del html
//             nombre.value = producto.nombre;
//             precio.value = producto.precio;
//             descripcion.value = producto.descripcion;
//         }else{
//             throw new Error();
//         }
//     }
//     catch (error) {
//         window.location.href="../screens/error.html"
//     }
// };
// obInfo();

// formulario.addEventListener("submit", async (evento)=>{
//     evento.preventDefault();
//     const url = new URL(window.location);
//     const id = url.searchParams.get("id");
//     const nombre = document.querySelector("[data-nombre]").value;
//     const precio = document.querySelector("[data-precio]").value;
//     const descripcion = document.querySelector("[data-descripcion]").value;
//     productoService.actualizar_productos(nombre, precio, descripcion, id)
//     .then(()=>{
//         window.location.href = "../screens/edicion_concluido.html";
//     })
// })











import { productoService } from "../service/product_service.js";

const formulario = document.querySelector("[data-form]");

const obInfo = async () => {
    const url = new URL(window.location);
    const id_pelicula = url.searchParams.get("id_pelicula");
    if (id_pelicula == null) {
        window.location.href = "error.html";
        return;
    }
    const nombre_pelicula = document.querySelector("[data-nombre_pelicula]");
    const precio = document.querySelector("[data-precio]");
    try {
        const prod = await productoService.producto(id_pelicula);
        if (prod.nombre_pelicula && prod.precio) {
            nombre_pelicula.value = prod.nombre_pelicula;
            precio.value = prod.precio;
        } else {
            throw new Error();
        }
    } catch (error) {
        window.location.href = "error.html";
    }
};
obInfo();

formulario.addEventListener("submit", async (evento) => {
    evento.preventDefault();
    const url = new URL(window.location);
    const id_pelicula = url.searchParams.get("id_pelicula");
    const nombre_pelicula = document.querySelector("[data-nombre_pelicula]").value;
    const precio = document.querySelector("[data-precio]").value;
    try {
        await productoService.actualizar_productos(nombre_pelicula, precio, id_pelicula);
        window.location.href = "edicion_producto.html";
    } catch (error) {
        alert("Error al actualizar el producto");
    }
});