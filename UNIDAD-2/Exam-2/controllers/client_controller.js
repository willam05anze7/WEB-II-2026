import { clienteService } from "../service/client-service.js";

//recepcion de datos 
const CrearFila = (nombre, telefono, id)=>{
    const fila = document.createElement('tr');//creamos una fila
    const contenido = 
    `
    <td class="td" data-td>
        ${nombre}
    </td>
    <td>${telefono}</td>
    <td>
        <ul class="table__button-control">
        <li>
            <a
            href="../screens/editar_cliente.html?id=${id}"
            class="simple-button simple-button--edit"
            >
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
    `
    ;
    fila.innerHTML = contenido;


    const btn = fila.querySelector("button");

        btn.addEventListener("click", () => {
        const id = btn.id;
        clienteService.eliminar_cliente(id)
        .then(respuesta => {
            alert("cliente eliminado");
            window.location.reload(); // Se ejecuta después del alert
        })
        .catch(error => alert("error al eliminar cliente"));
    })
    return fila;
}

const tabla = document.querySelector("[data-table]"); 
clienteService.listar_clientes()
    .then((data)=>{
        data.forEach(({nombre, telefono, id})=>{
            const nueva_fila = CrearFila(nombre, telefono, id);
            tabla.appendChild(nueva_fila);
        });
    }).catch((error)=>alert("ERROR"));

