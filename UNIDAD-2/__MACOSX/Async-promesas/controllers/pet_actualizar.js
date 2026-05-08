import { petService } from "../service/pet_service.js";

const formulario = document.querySelector("[data-form]");
    
const obInfo = async()=>{
    const url = new URL(window.location);
    const id = (url.searchParams.get("id"));
    if (id == null){
        window.location.href="/screens/error.html"
    }
    const nombre = document.querySelector("[data-nombre]");
    const edad = document.querySelector("[data-edad]");
    const raza = document.querySelector("[data-raza]");
    const peso = document.querySelector("[data-peso]");
    const idDueno = document.querySelector("[data-dueno]");
    try {
        const perfil = await petService.pet(id);
        if(perfil.nombre && perfil.edad && perfil.raza && perfil.peso && perfil.idDueno){ //rescato los formularios de json server y los asigno a los formularios del html
            nombre.value = perfil.nombre;
            edad.value = perfil.edad;
            raza.value = perfil.raza;
            peso.value = perfil.peso;
            idDueno.value = perfil.idDueno;
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
    const edad = document.querySelector("[data-edad]").value;
    const raza = document.querySelector("[data-raza]").value;
    const peso = document.querySelector("[data-peso]").value;
    const idDueno = document.querySelector("[data-dueno]").value;
    petService.actualizar_pets(nombre, edad, raza, peso, idDueno, id)
    .then(()=>{
        window.location.href = "../screens/edicion_concluido.html";
    })
})

