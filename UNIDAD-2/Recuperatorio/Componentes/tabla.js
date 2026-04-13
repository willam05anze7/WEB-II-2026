import { putData } from "../js/put.js";
import { deleteData } from "../js/delete.js";
import cards from "./cards.js";

const tabla = (() => {
    const tbody = document.getElementById('tableBody');
    
    console.log("Tabla body encontrado:", tbody);

    const agregarTarea = (tarea) => {
        if (!tbody) {
            console.error("No se encontró el tbody de la tabla");
            return;
        }
        
        console.log("Agregando tarea a la tabla:", tarea);
        
        const fila = tbody.insertRow();
        fila.setAttribute('data-id', tarea.id);
        
        if (tarea.completado) {
            fila.classList.add('completed');
        }

        fila.insertCell(0).textContent = tarea.Nombre_tarea || tarea.task;
        fila.insertCell(1).textContent = tarea.descripción || tarea.Description;
        fila.insertCell(2).textContent = tarea.fecha || tarea.date;
        fila.insertCell(3).textContent = tarea.Prioridad || tarea.priority;
        
        // Celda de estado
        const estadoCell = fila.insertCell(4);
        const estadoSpan = document.createElement('span');
        estadoSpan.className = `status ${tarea.completado ? 'status-completed' : 'status-pending'}`;
        estadoSpan.textContent = tarea.completado ? '✓ Completado' : '○ Pendiente';
        estadoCell.appendChild(estadoSpan);
        
        // Celda de acciones
        const accionesCell = fila.insertCell(5);
        const accionesDiv = document.createElement('div');
        accionesDiv.className = 'actions';
        
        // Botón Completar
        const completarBtn = document.createElement('button');
        completarBtn.textContent = tarea.completado ? 'Deshacer' : 'Completar';
        completarBtn.className = 'btn-complete';
        completarBtn.onclick = async () => {
            const completado = !tarea.completado;
            fila.classList.toggle('completed');
            estadoSpan.textContent = completado ? '✓ Completado' : '○ Pendiente';
            estadoSpan.className = `status ${completado ? 'status-completed' : 'status-pending'}`;
            completarBtn.textContent = completado ? 'Deshacer' : 'Completar';
            
            const tareaActualizada = { ...tarea, completado: completado };
            await putData(tarea.id, tareaActualizada);
            cards.actualizar();
        };
        
        // Botón Eliminar
        const eliminarBtn = document.createElement('button');
        eliminarBtn.textContent = 'Eliminar';
        eliminarBtn.className = 'btn-delete';
        eliminarBtn.onclick = async () => {
            if (confirm('¿Eliminar esta tarea?')) {
                await deleteData(tarea.id);
                tbody.deleteRow(fila.rowIndex);
                cards.actualizar();
            }
        };
        
        accionesDiv.appendChild(completarBtn);
        accionesDiv.appendChild(eliminarBtn);
        accionesCell.appendChild(accionesDiv);
    };

    const obtenerTareas = () => {
        if (!tbody) return [];
        return Array.from(tbody.rows).map(fila => ({
            id: parseInt(fila.getAttribute('data-id')),
            Nombre_tarea: fila.cells[0].textContent,
            descripción: fila.cells[1].textContent,
            fecha: fila.cells[2].textContent,
            Prioridad: fila.cells[3].textContent,
            completado: fila.classList.contains('completed')
        }));
    };

    return { agregarTarea, obtenerTareas };
})();

export default tabla;