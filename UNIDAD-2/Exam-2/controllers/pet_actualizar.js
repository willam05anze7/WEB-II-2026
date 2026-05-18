// import { petService } from "../service/pet_service.js";

// const formulario = document.querySelector("[data-form]");
    
// const obInfo = async()=>{
//     const url = new URL(window.location);
//     const id = (url.searchParams.get("id"));
//     if (id == null){
//         window.location.href="/screens/error.html"
//     }
//     const nombre = document.querySelector("[data-nombre]");
//     const edad = document.querySelector("[data-edad]");
//     const raza = document.querySelector("[data-raza]");
//     const peso = document.querySelector("[data-peso]");
//     const idDueno = document.querySelector("[data-dueno]");
//     try {
//         const perfil = await petService.pet(id);
//         if(perfil.nombre && perfil.edad && perfil.raza && perfil.peso && perfil.idDueno){ //rescato los formularios de json server y los asigno a los formularios del html
//             nombre.value = perfil.nombre;
//             edad.value = perfil.edad;
//             raza.value = perfil.raza;
//             peso.value = perfil.peso;
//             idDueno.value = perfil.idDueno;
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
//     const edad = document.querySelector("[data-edad]").value;
//     const raza = document.querySelector("[data-raza]").value;
//     const peso = document.querySelector("[data-peso]").value;
//     const idDueno = document.querySelector("[data-dueno]").value;
//     petService.actualizar_pets(nombre, edad, raza, peso, idDueno, id)
//     .then(()=>{
//         window.location.href = "../screens/edicion_concluido.html";
//     })
// })






import { petService } from "../service/pet_service.js";
import { clienteService } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");
const selectDueno = document.querySelector("[data-cliente]");
const selectPelicula = document.querySelector("[data-pelicula]");

// Carga los clientes en el select del dueño
const cargarDuenos = async () => {
    try {
        const cliente = await clienteService.listar_clientes();
        cliente.forEach(({ nombre, id }) => {
            const option = document.createElement("option");
            option.value = id;
            option.textContent = nombre;
            selectDueno.appendChild(option);
        });
    } catch (error) {
        console.log("Error al cargar dueños", error);
    }
};

const obInfo = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    if (id == null) {
        window.location.href = "error.html";
        return;
    }

    const nombre = document.querySelector("[data-nombre]");
    const edad = document.querySelector("[data-edad]");
    const raza = document.querySelector("[data-raza]");
    const peso = document.querySelector("[data-peso]");

    try {
        // Primero cargamos los dueños en el select, luego cargamos la pet
        await cargarDuenos();

        const mascota = await petService.pet(id);
        if (mascota.nombre) {
            nombre.value = mascota.nombre;
            edad.value = mascota.edad;
            raza.value = mascota.raza;
            peso.value = mascota.peso;
            // Selecciona automáticamente el dueño actual en el select
            selectDueno.value = mascota.idDueno;
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
    const id = url.searchParams.get("id");
    const nombre = document.querySelector("[data-nombre]").value;
    const edad = document.querySelector("[data-edad]").value;
    const raza = document.querySelector("[data-raza]").value;
    const peso = document.querySelector("[data-peso]").value;
    const idDueno = selectDueno.value;

    try {
        await petService.actualizar_pets(nombre, edad, raza, peso, idDueno, id);
        window.location.href = "edicion_concluida_pet.html";
    } catch (error) {
        alert("Error al actualizar la mascota");
    }
});