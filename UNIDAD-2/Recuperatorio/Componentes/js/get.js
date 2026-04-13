const API_URL = "http://localhost:3000/posts";

export const getData = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        const data = await response.json();
        console.log("Datos cargados:", data);
        return data;
    } catch (error) {
        console.error("Error al cargar datos:", error);
        return [];
    }
};