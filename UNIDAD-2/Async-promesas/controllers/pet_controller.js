import { petService } from "../service/pet_service.js";
import { clienteService } from "../service/client-service.js";

const CrearFila = (nombre, edad, raza, peso, nombreDueno, id) => {
    const fila = document.createElement('tr');
    const contenido = `
        <td>${nombre}</td>
        <td>${edad}</td>
        <td>${raza}</td>
        <td>${peso}</td>
        <td>${nombreDueno}</td>
        <td>
            <ul class="table__button-control">
                <li>
                    <a href="../screens/editar_pet.html?id=${id}"
                    class="simple-button simple-button--edit">
                    Editar
                    </a>
                </li>
                <li>    
                    <button class="simple-button simple-button--delete" type="button" id="${id}">
                    Eliminar
                    </button>
                </li>
            </ul>
        </td>
    `;
    fila.innerHTML = contenido;

    const btn = fila.querySelector("button");
    if (btn) {
        btn.addEventListener("click", () => {
            if (confirm("¿Estás seguro de eliminar esta mascota?")) {
                petService.eliminar_pets(id)
                .then(() => {
                    alert("Mascota eliminada exitosamente");
                    window.location.reload();
                })
                .catch(() => alert("Error al eliminar mascota"));
            }
        });
    }
    return fila;
};

const tabla = document.querySelector("[data-table]");

if (tabla) {
    petService.listar_pets()
        .then((pets) => {
            if (!pets || pets.length === 0) {
                tabla.innerHTML = '<tr><td colspan="6">No hay mascotas registradas</td></tr>';
                return;
            }

            // Por cada pet, busco el nombre del dueño
            const promesas = pets.map((pet) => {
                return clienteService.cliente(pet.idDueno)
                    .then((dueno) => {
                        return { ...pet, nombreDueno: dueno.nombre };
                    })
                    .catch(() => {
                        // Si no encuentra el dueño, muestra "Desconocido"
                        return { ...pet, nombreDueno: "Desconocido" };
                    });
            });

            Promise.all(promesas).then((petsConDueno) => {
                petsConDueno.forEach(({ nombre, edad, raza, peso, nombreDueno, id }) => {
                    const nueva_fila = CrearFila(nombre, edad, raza, peso, nombreDueno, id);
                    tabla.appendChild(nueva_fila);
                });
            });
        })
        .catch(() => alert("Error al cargar las mascotas"));
}