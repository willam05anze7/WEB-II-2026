// //-----------optimizado-----------//
// const listar_pets = () => {
//     return fetch("http://localhost:3000/pets")
//     .then((response)=> {
//         if (!response.ok) throw new Error('Error al listar mascotas');
//         return response.json();
//     });
// }

// const crear_pet = (nombre, edad, raza, peso, idDueno)=>{
//     return fetch("http://localhost:3000/pets",{
//         method:"POST",
//         headers:{
//             "Content-Type":"application/json"
//         },
//         body:JSON.stringify({
//             nombre, 
//             edad, 
//             raza, 
//             peso, 
//             idDueno,
//             id: uuid.v4()
//         })
//     }).then(response => {
//         if (!response.ok) throw new Error('Error al crear mascota');
//         return response.json();
//     });
// };  

// const actualizar_pets = (nombre, edad, raza, peso, idDueno, id)=>{
//     return fetch(`http://localhost:3000/pets/${id}`, {
//         method:"PUT",
//         headers:{
//             "Content-Type":"application/json"
//         },
//         body:JSON.stringify({nombre, edad, raza, peso, idDueno})
//     })
//     .then(respuesta => {
//         if (!respuesta.ok) throw new Error('Error al actualizar mascota');
//         return respuesta.json();
//     })
//     .catch((error) => console.log(error));
// };

// const eliminar_pets = (id)=>{
//     return fetch(`http://localhost:3000/pets/${id}`,{
//         method:"DELETE",
//     }).then(response => {
//         if (!response.ok) throw new Error('Error al eliminar mascota');
//         return response.json();
//     });
// }

// const pet = (id)=>{
//     return fetch(`http://localhost:3000/pets/${id}`)
//     .then((respuesta)=> {
//         if (!respuesta.ok) throw new Error('Mascota no encontrada');
//         return respuesta.json();
//     });
// }

// export const petService = {
//     listar_pets,
//     crear_pet,
//     actualizar_pets,
//     eliminar_pets,
//     pet
// }








// //---------con MYSQL 
// const api_pets_url = 'http://localhost/_api/pets_conex.php';

// const listar_pets = () => {
//     return fetch(api_pets_url)
//         .then(res => res.json());
// };

// const crear_pet = (nombre, edad, raza, peso, idDueno) => {
//     return fetch(api_pets_url, {
//         method: "POST",
//         headers: { "content-type": "application/json" },
//         body: JSON.stringify({ nombre, edad, raza, peso, idDueno, id: uuid.v4() })
//     }).then(res => res.json());
// };

// const eliminar_pets = (id) => {
//     return fetch(`${api_pets_url}?id=${id}`, {
//         method: "DELETE",
//     });
// };

// const actualizar_pets = (nombre, edad, raza, peso, idDueno, id) => {
//     return fetch(api_pets_url, {
//         method: "PUT",
//         headers: { "content-type": "application/json" },
//         body: JSON.stringify({ nombre, edad, raza, peso, idDueno, id })
//     }).then(res => res.json())
//         .catch(err => console.log(err));
// };

// const pet = (id) => {
//     return fetch(`${api_pets_url}?id=${id}`)
//         .then(res => res.json());
// };

// export const petService = {
//     listar_pets,
//     crear_pet,
//     actualizar_pets,
//     eliminar_pets,
//     pet
// };












// //-------con supabase
// const URL_SUPABASE = 'https://henznhojxuvqfbjlvhft.supabase.co';
// const SUPABASE_KEY = 'sb_publishable_wxCUYYBUCl0phm3mgz0CbA_FV5lTcQ4';
// const tabla = 'pets';
// const api_URL = `${URL_SUPABASE}/rest/v1/${tabla}`;
// const HEADERS = {
//     'apikey': SUPABASE_KEY,
//     'authorization': `Bearer ${SUPABASE_KEY}`,
//     'Content-Type': 'application/json',
//     'prefer': 'return=representation'
// };

// const request = async (url, option = {}) => {
//     const res = await fetch(url, { headers: HEADERS, ...option });
//     const texto = await res.text();
//     const data = texto ? JSON.parse(texto) : null;
//     if (!res.ok) {
//         const mensaje = data?.message ?? data?.error ?? texto ?? 'Error';
//         throw new Error(mensaje);
//     }
//     return data;
// };

// const listar_pets = () => {
//     return request(`${api_URL}?select=id,nombre,edad,raza,peso,idDueno`);
// };

// const pet = (id) => {
//     return request(`${api_URL}?id=eq.${id}&select=id,nombre,edad,raza,peso,idDueno`)
//         .then(data => data?.[0] ?? Promise.reject(new Error('mascota no encontrada')));
// };

// const crear_pet = (nombre, edad, raza, peso, idDueno) => {
//     return request(api_URL, {
//         method: "POST",
//         body: JSON.stringify({ nombre, edad, raza, peso, idDueno })
//     }).then(data => data?.[0]);
// };

// const actualizar_pets = (nombre, edad, raza, peso, idDueno, id) => {
//     return request(`${api_URL}?id=eq.${id}`, {
//         method: "PATCH",
//         body: JSON.stringify({ nombre, edad, raza, peso, idDueno })
//     }).then(data => data?.[0] ?? Promise.reject(new Error('no se pudo actualizar')));
// };

// const eliminar_pets = (id) => {
//     return request(`${api_URL}?id=eq.${id}`, {
//         method: "DELETE",
//     });
// };

// export const petService = {
//     listar_pets,
//     pet,
//     crear_pet,
//     actualizar_pets,
//     eliminar_pets
// };















// //-------con sqlserver 
// const api_pets_url = 'http://localhost:3000/pets';

// const listar_pets = () => {
//     return fetch(api_pets_url).then(res => res.json());
// };

// const pet = (id) => {
//     return fetch(`${api_pets_url}/${id}`).then(res => res.json());
// };

// const crear_pet = (nombre, edad, raza, peso, idDueno) => {
//     return fetch(api_pets_url, {
//         method: "POST",
//         headers: { "content-type": "application/json" },
//         body: JSON.stringify({ nombre, edad, raza, peso, idDueno })
//     }).then(res => res.json());
// };

// const actualizar_pets = (nombre, edad, raza, peso, idDueno, id) => {
//     return fetch(`${api_pets_url}/${id}`, {
//         method: "PUT",
//         headers: { "content-type": "application/json" },
//         body: JSON.stringify({ nombre, edad, raza, peso, idDueno })
//     }).then(res => res.json())
//       .catch(err => console.log(err));
// };

// const eliminar_pets = (id) => {
//     return fetch(`${api_pets_url}/${id}`, {
//         method: "DELETE",
//     });
// };

// export const petService = {
//     listar_pets,
//     pet,
//     crear_pet,
//     actualizar_pets,
//     eliminar_pets
// };

















//----------trabajdo con Express
const BASE_URL = "http://localhost:3000";

const petService = {
    listar_pets: async () => {
        const res = await fetch(`${BASE_URL}/pets`);
        return res.json();
    },
    pet: async (id_boleto) => {
        const res = await fetch(`${BASE_URL}/pets/${id_boleto}`);
        return res.json();
    },
    crear_pet: async (descripcion, id_cliente, id_pelicula) => {
        const res = await fetch(`${BASE_URL}/pets`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ descripcion, id_cliente, id_pelicula })
        });
        return res.json();
    },
    actualizar_pets: async (descripcion, id_pelicula, id_cliente, id_boleto) => {
        const res = await fetch(`${BASE_URL}/pets/${id_boleto}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ descripcion, id_pelicula, id_cliente })
        });
        return res.json();
    },
    eliminar_pets: async (id_boleto) => {
        const res = await fetch(`${BASE_URL}/pets/${id_boleto}`, {
            method: "DELETE",
        });
        return res.json();
    }
};

export { petService };