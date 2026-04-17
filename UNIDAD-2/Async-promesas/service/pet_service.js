//-----------optimizado-----------//

const listar_pets = () => {
    return fetch("http://localhost:3000/pets")
    .then((response)=> {
        if (!response.ok) throw new Error('Error al listar mascotas');
        return response.json();
    });
}

const crear_pet = (nombre, edad, raza, peso, idDueno)=>{
    return fetch("http://localhost:3000/pets",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            nombre, 
            edad, 
            raza, 
            peso, 
            idDueno,
            id: uuid.v4()
        })
    }).then(response => {
        if (!response.ok) throw new Error('Error al crear mascota');
        return response.json();
    });
};  

const actualizar_pets = (nombre, edad, raza, peso, idDueno, id)=>{
    return fetch(`http://localhost:3000/pets/${id}`, {
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({nombre, edad, raza, peso, idDueno})
    })
    .then(respuesta => {
        if (!respuesta.ok) throw new Error('Error al actualizar mascota');
        return respuesta.json();
    })
    .catch((error) => console.log(error));
};

const eliminar_pets = (id)=>{
    return fetch(`http://localhost:3000/pets/${id}`,{
        method:"DELETE",
    }).then(response => {
        if (!response.ok) throw new Error('Error al eliminar mascota');
        return response.json();
    });
}

const pet = (id)=>{
    return fetch(`http://localhost:3000/pets/${id}`)
    .then((respuesta)=> {
        if (!respuesta.ok) throw new Error('Mascota no encontrada');
        return respuesta.json();
    });
}

export const petService ={
    listar_pets,
    crear_pet,
    actualizar_pets,
    eliminar_pets,
    pet
};