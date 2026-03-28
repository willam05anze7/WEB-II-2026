const putData = () =>{
    const updateData={
        titulo:"ACTULIZADO",
        descripcion:"ACTUALIZADO",
        fecha: new Date().toISOString()
    };
    fetch(`${API_URL}/1`,{
        method:"PUT",
        headers:{"Content-type": "aplication/json",
            "Accept": "aplication/json"
        },
        body: JSON.stringify(updateData)
    }).then(response =>{
        if(!response.ok){
            throw new Error(`HTTP error estado ${response.status}`)
        }
        showResult({
            message:"Post con el id eliminado",
            status:response.status
        })
    })
    .catch(error=>(error.message,true));
}