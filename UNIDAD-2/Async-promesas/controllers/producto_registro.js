import { productoService } from "../service/product_service.js";

const formulario = document.querySelector('[data-form]');

formulario.addEventListener("submit", (evento)=>{
    evento.preventDefault();

    const nombre = document.querySelector('[data-nombre]').value;
    const precio = document.querySelector('[data-precio]').value;
    const descripcion = document.querySelector('[data-descripcion]').value;

    productoService.crear_producto(nombre, precio, descripcion)
    .then(respuesta => {
        console.log("todo bien", respuesta);
        window.location.href = "../screens/registro_completado.html";
    }).catch((error)=>{
        console.log("todo mal", error);
    });
}); 