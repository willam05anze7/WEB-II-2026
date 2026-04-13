import Form from "./Componentes/formulario.js";
import tabla from "./Componentes/tabla.js";
import cards from "./Componentes/cards.js";
import { getData } from "./js/get.js";
import { postData } from "./js/post.js";

console.log("🚀 Script iniciado");

// Esperar a que todo el DOM cargue
window.addEventListener('load', () => {
    console.log("✅ DOM completamente cargado");
    
    // Cargar tareas existentes
    const cargarTareas = async () => {
        try {
            console.log("📥 Cargando tareas desde la API...");
            const tareas = await getData();
            console.log("📋 Tareas obtenidas:", tareas);
            
            if (tareas && tareas.length > 0) {
                tareas.forEach(tarea => {
                    tabla.agregarTarea(tarea);
                });
                cards.actualizar();
                console.log(`✅ Se cargaron ${tareas.length} tareas`);
            }
        } catch (error) {
            console.error("❌ Error al cargar tareas:", error);
        }
    };
    
    // Configurar el formulario
    Form.setDatos(async (nuevaTarea) => {
        console.log("📝 Recibida nueva tarea del formulario:", nuevaTarea);
        
        try {
            const tareaGuardada = await postData(nuevaTarea);
            console.log("💾 Tarea guardada en API:", tareaGuardada);
            
            if (tareaGuardada) {
                tabla.agregarTarea(tareaGuardada);
                cards.actualizar();
                console.log("✅ Tarea agregada exitosamente a la tabla y cards");
            }
        } catch (error) {
            console.error("❌ Error al guardar:", error);
            alert("Error al guardar la tarea");
        }
    });
    
    // Iniciar carga
    cargarTareas();
});