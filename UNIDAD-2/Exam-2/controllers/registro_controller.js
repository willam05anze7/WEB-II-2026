import { clienteService } from "../service/client-service.js";

const formulario = document.querySelector('[data-form]');

formulario.addEventListener("submit", (evento)=>{
    evento.preventDefault();
    const nombre = document.querySelector('[data-nombre]').value;
    const telefono = document.querySelector('[data-telefono]').value;
    clienteService.crear_cliente(nombre,telefono)
    .then(respuesta => {
        console.log("todo bien", respuesta);
        window.location.href = "../screens/registro_completado.html";
    }).catch((error)=>{
        console.log("todo mal", error);
    })
})