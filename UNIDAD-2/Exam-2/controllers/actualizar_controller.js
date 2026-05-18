import { clienteService } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");
    
const obInfo = async()=>{
    const url = new URL(window.location);
    const id = (url.searchParams.get("id"));
    if (id == null){
        window.location.href="/screens/error.html"
    }
    const nombre = document.querySelector("[data-nombre]");
    const telefono = document.querySelector("[data-telefono]");
    try {
        const perfil = await clienteService.cliente(id);
        if(perfil.nombre && perfil.telefono){ //rescato los formularios de json server y los asigno a los formularios del html
            nombre.value = perfil.nombre;
            telefono.value = perfil.telefono;
        }else{
            throw new Error();
        }
    }
    catch (error) {
        window.location.href="../screens/error.html"
    }
};
obInfo();

formulario.addEventListener("submit", async (evento)=>{
    evento.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    const nombre = document.querySelector("[data-nombre]").value;
    const telefono = document.querySelector("[data-telefono]").value;
    clienteService.actualizar_cliente(nombre,telefono,id)
    .then(()=>{
        window.location.href = "../screens/editar_cliente.html";
    })
})

