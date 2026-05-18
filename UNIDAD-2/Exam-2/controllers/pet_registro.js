import { petService } from "../service/pet_service.js";
import { clienteService } from "../service/client-service.js";

const formulario = document.querySelector('[data-form]');
const selectDueno = document.querySelector('[data-dueno]');

// Carga los clientes como opciones en el select
const cargarDuenos = async () => {
    try {
        const clientes = await clienteService.listar_clientes();
        if (clientes.length === 0) {
            const option = document.createElement("option");
            option.textContent = "No hay clientes registrados";
            option.disabled = true;
            selectDueno.appendChild(option);
            return;
        }
        clientes.forEach(({ nombre, id }) => {
            const option = document.createElement("option");
            option.value = id;
            option.textContent = nombre;
            selectDueno.appendChild(option);
        });
    } catch (error) {
        console.log("Error al cargar dueños", error);
    }
};
cargarDuenos();

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nombre = document.querySelector('[data-nombre]').value;
    const edad = document.querySelector('[data-edad]').value;
    const raza = document.querySelector('[data-raza]').value;
    const peso = document.querySelector('[data-peso]').value;
    const idDueno = selectDueno.value;

    petService.crear_pet(nombre, edad, raza, peso, idDueno)
        .then(respuesta => {
            console.log("todo bien", respuesta);
            window.location.href = "../screens/registro_completado_pet.html";
        }).catch((error) => {
            console.log("todo mal", error);
        });
});