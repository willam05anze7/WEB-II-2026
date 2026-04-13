const API_URL = "http://localhost:3000/posts";

export const putData = async (id, tareaActualizada) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(tareaActualizada)
        });
        
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        
        const data = await response.json();
        console.log("Tarea actualizada:", data);
        return data;
    } catch (error) {
        console.error("Error al actualizar tarea:", error);
        return null;
    }
};