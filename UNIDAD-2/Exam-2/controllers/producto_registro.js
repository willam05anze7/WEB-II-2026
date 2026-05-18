import { productoService } from "../service/product_service.js";

const formulario = document.querySelector('[data-form]');

formulario.addEventListener("submit", (evento)=>{
    evento.preventDefault();

    const nombre_pelicula = document.querySelector('[data-nombre_pelicula]').value;
    const precio = document.querySelector('[data-precio]').value;

    productoService.crear_producto(nombre_pelicula, precio)
    .then(respuesta => {
        console.log("todo bien", respuesta);
        window.location.href = "../screens/registro_completado_producto.html";
    }).catch((error)=>{
        console.log("todo mal", error);
    });
}); 