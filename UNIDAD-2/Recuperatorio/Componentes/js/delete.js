const API_URL = "http://localhost:3000/posts";

export const deleteData = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        });
        
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        
        console.log("Tarea eliminada:", id);
        return true;
    } catch (error) {
        console.error("Error al eliminar tarea:", error);
        return false;
    }
};