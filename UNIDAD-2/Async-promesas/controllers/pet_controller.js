import { petService } from "../service/pet_service.js";

const CrearFila = (nombre, edad, raza, peso, idDueno, id) => {
    const fila = document.createElement('tr');

    const contenido = `
        <td>${nombre}</td>
        <td>${edad}</td>
        <td>${raza}</td>
        <td>${peso}</td>
        <td>${idDueno}</td>
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
}

const tabla = document.querySelector("[data-table]");
if (tabla) {
    petService.listar_pets()
    .then((data) => {
        if (data && data.length > 0) {
            data.forEach(({ nombre, edad, raza, peso, idDueno, id }) => {
                const nueva_fila = CrearFila(nombre, edad, raza, peso, idDueno, id);
                tabla.appendChild(nueva_fila);
            });
        } else {
            tabla.innerHTML = '<tr><td colspan="6">No hay mascotas registradas</td></tr>';
        }
    })
    .catch(() => alert("Error al cargar las mascotas"));
}