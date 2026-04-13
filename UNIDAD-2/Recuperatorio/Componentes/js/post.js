const API_URL = "http://localhost:3000/posts";

export const postData = async (nuevaTarea) => {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(nuevaTarea)
        });
        
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        
        const data = await response.json();
        console.log("Tarea guardada:", data);
        return data;
    } catch (error) {
        console.error("Error al guardar tarea:", error);
        return null;
    }
};