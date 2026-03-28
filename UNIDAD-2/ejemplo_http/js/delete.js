const deleteData=()=>{
    fetch(`${API_URL}/1`,{
        method:"DELETE"
    }).then(response =>{
        if(!response.ok){
            throw new Error(`HTTP error estado ${response.status}`)
        }
        return response.json();
    }).then(data=>showResult(data)).catch(error=>showResult(error.message,true));
}

const eliminarPost = () => {
    const id = document.getElementById("idEliminar").value;

    fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    })
    .then(res => {
        if (!res.ok) {
            throw new Error("Error al eliminar");
        }
        showResult({ mensaje: "Post eliminado correctamente" });
    })
    .catch(err => showResult(err.message, true));
};