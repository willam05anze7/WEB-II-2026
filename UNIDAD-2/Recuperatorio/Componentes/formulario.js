const Form = (() => {
    const form = document.getElementById('taskForm');
    const inputTask = document.getElementById('taskName');
    const inputDescription = document.getElementById('taskDescription');
    const inputFecha = document.getElementById('taskDate');
    const inputPrioridad = document.getElementById('taskPriority');

    // Verificar que los elementos existen
    console.log("Formulario encontrado:", form);
    console.log("Inputs encontrados:", inputTask, inputDescription, inputFecha, inputPrioridad);

    const obtenerDatos = () => {
        return {
            Nombre_tarea: inputTask ? inputTask.value.trim() : "",
            descripción: inputDescription ? inputDescription.value.trim() : "",
            fecha: inputFecha ? inputFecha.value : "",
            Prioridad: inputPrioridad ? inputPrioridad.value : "",
            completado: false
        };
    };

    const limpiarFormulario = () => {
        if (inputTask) inputTask.value = "";
        if (inputDescription) inputDescription.value = "";
        if (inputFecha) inputFecha.value = "";
        if (inputPrioridad) inputPrioridad.value = "";
    };

    const setDatos = (callback) => {
        if (!form) {
            console.error("No se encontró el formulario");
            return;
        }
        
        // Usar el evento submit del formulario
        form.onsubmit = async (event) => {
            event.preventDefault(); // Esto evita que se recargue la página
            event.stopPropagation();
            
            console.log("Formulario enviado - evitando recarga");
            
            const tarea = obtenerDatos();
            console.log("Datos del formulario:", tarea);
            
            if (tarea.Nombre_tarea && tarea.descripción && tarea.fecha && tarea.Prioridad) {
                await callback(tarea);
                limpiarFormulario();
            } else {
                alert("Por favor, complete todos los campos");
            }
            
            return false;
        };
    };

    return { setDatos };
})();

export default Form;