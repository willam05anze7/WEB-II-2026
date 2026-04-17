import { clienteService } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");
    
const obInfo = async()=>{
    const url = new URL(window.location);
    const id = (url.searchParams.get("id"));
    if (id == null){
        window.location.href="/screens/error.html"
    }
    const nombre = document.querySelector("[data-nombre]");
    const email = document.querySelector("[data-email]");
    try {
        const perfil = await clienteService.cliente(id);
        if(perfil.nombre && perfil.email){ //rescato los formularios de json server y los asigno a los formularios del html
            nombre.value = perfil.nombre;
            email.value = perfil.email;
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
    const email = document.querySelector("[data-email]").value;
    clienteService.actualizar_cliente(nombre,email,id)
    .then(()=>{
        window.location.href = "../screens/edicion_concluido.html";
    })
})

