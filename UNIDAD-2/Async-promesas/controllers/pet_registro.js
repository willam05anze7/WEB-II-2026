import { petService } from "../service/pet_service.js";

const formulario = document.querySelector('[data-form]');

    formulario.addEventListener("submit", (evento)=>{
        evento.preventDefault();

        const nombre = document.querySelector('[data-nombre]').value;
        const edad = document.querySelector('[data-edad]').value;
        const raza = document.querySelector('[data-raza]').value;
        const peso = document.querySelector('[data-peso]').value;
        const idDueno = document.querySelector('[data-dueno]').value;


        petService.crear_pet(nombre, edad, raza, peso, idDueno)
            .then(respuesta => {
                console.log("todo bien", respuesta);
                window.location.href = "../screens/registro_pet_completado.html";
            }).catch((error)=>{ 
                console.log("todo mal", error);
            });
    });
