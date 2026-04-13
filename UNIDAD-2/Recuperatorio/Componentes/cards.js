import tabla from "./tabla.js";

const cards = (() => {
    const container = document.getElementById('taskCards');

    const actualizar = () => {
        const tareas = tabla.obtenerTareas();
        container.innerHTML = '';
        
        if (tareas.length === 0) {
            container.innerHTML = '<p style="text-align:center; color:#999;">No hay tareas registradas</p>';
            return;
        }
        
        tareas.forEach(tarea => {
            const card = document.createElement('div');
            card.className = 'taskCard';
            
            card.innerHTML = `
                <p><strong>📌 Nombre:</strong> ${tarea.Nombre_tarea}</p>
                <p><strong>📝 Descripción:</strong> ${tarea.descripción}</p>
                <p><strong>📅 Fecha:</strong> ${tarea.fecha}</p>
                <p><strong>⚡ Prioridad:</strong> ${tarea.Prioridad}</p>
                <p><strong>✅ Estado:</strong> ${tarea.completado ? "Completado" : "Pendiente"}</p>
            `;
            
            container.appendChild(card);
        });
    };

    return { actualizar };
})();

export default cards;