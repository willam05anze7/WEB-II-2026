//-----------optimizado-----------//
/*
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
*/



//---------con MYSQL (XAMPP) - Módulo de Mascotas (Pets)
const api_pets_url = 'http://localhost/_api/pets_conex.php'

const listar_pets = () => {
    return fetch(api_pets_url).then(res => {
        if (!res.ok) throw new Error('Error al listar mascotas');
        return res.json();
    });
}

const crear_pet = (nombre, edad, raza, peso, idDueno, id) => {
    return fetch(api_pets_url, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ nombre, edad, raza, peso, idDueno, id })
    }).then(res => {
        if (!res.ok) throw new Error('Error al crear mascota');
        return res.json();
    });
};

const eliminar_pet = (id) => {
    return fetch(`${api_pets_url}?id=${id}`, {
        method: "DELETE",
    }).then(res => res.json());
}

const actualizar_pet = (nombre, edad, raza, peso, idDueno, id) => {
    return fetch(`${api_pets_url}?id=${id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ nombre, edad, raza, peso, idDueno, id })
    }).then(res => res.json()).catch(err => console.log(err));
}

const obtener_pet = (id) => {
    return fetch(`${api_pets_url}?id=${id}`).then(res => res.json());
}









export const petService ={
    listar_pets,
    crear_pet,
    actualizar_pets,
    eliminar_pets,
    pet
};