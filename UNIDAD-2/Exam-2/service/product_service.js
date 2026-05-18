// //-----------optimizado-----------//

// const listar_productos = () => {
//     return fetch("http://localhost:3000/productos")//hacemos l atepicion con fetch, que devuelve una promesa
//     .then((response)=>response.json())//convertimos la respuesta a json
// }

// const crear_producto = (nombre,precio, descripcion)=>{
//     return fetch("http://localhost:3000/productos",{
//         method:"POST",//metodo post para crear un nuevo cliente
//         headers:{
//             "content-type":"application/json"//indicamos que el contenido es json
//         },
//         body:JSON.stringify({nombre,precio,descripcion, id:uuid.v4()})//realizamos la conversion a json del objeto que queremos enviar
//         //nota muy importe en el src crea identificadores unicos
//     });

// };

// const actualizar_productos = (nombre,precio,descripcion, id)=>{//solo modifico el nombre y precio 
//     return fetch(`http://localhost:3000/productos/${id}`, {
//         method:"PUT",//metodo put para actualizar un cliente
//         headers:{
//             "content-type":"application/json"//indicamos que el contenido es json
//         },
//         body:JSON.stringify({nombre,precio, descripcion}) //realizamos la conversion a json del objeto que queremos enviar
//     })
//     .then(respuesta => respuesta) // Retornamos la respuesta para seguir la promesa
//     .catch((error) => console.log(error));
// };

// const eliminar_productos = (id)=>{
//     console.log("elimina ",id);
//     return fetch(`http://localhost:3000/productos/${id}`,{
//         method:"DELETE",//metodo delete para eliminar un cliente
//     })
// }

// //referencia a ID
// const producto =(id)=>{
//     return fetch(`http://localhost:3000/productos/${id}`,).then((respuesta)=>respuesta.json());
// }

// export const productoService = {
//     listar_productos,
//     crear_producto,
//     actualizar_productos,
//     eliminar_productos,
//     producto
// }





// //---------con MYSQL
// const api_productos_url = 'http://localhost/_api/producto_conex.php';

// const listar_productos = () => {
//     return fetch(api_productos_url)
//         .then(response => response.json());
// };

// const crear_producto = (nombre, precio, descripcion) => {
//     return fetch(api_productos_url, {
//         method: "POST",
//         headers: { "content-type": "application/json" },
//         body: JSON.stringify({ nombre, precio, descripcion, id: uuid.v4() })
//     }).then(response => response.json());
// };

// const eliminar_productos = (id) => {
//     return fetch(`${api_productos_url}?id=${id}`, {
//         method: "DELETE",
//     });
// };

// const actualizar_productos = (nombre, precio, descripcion, id) => {
//     return fetch(api_productos_url, {
//         method: "PUT",
//         headers: { "content-type": "application/json" },
//         body: JSON.stringify({ nombre, precio, descripcion, id })
//     }).then(respuesta => respuesta.json())
//       .catch(err => console.log(err));
// };

// const producto = (id) => {
//     return fetch(`${api_productos_url}?id=${id}`)
//         .then(respuesta => respuesta.json());
// };

// export const productoService = {
//     listar_productos,
//     crear_producto,
//     actualizar_productos,
//     eliminar_productos,
//     producto
// };











// //------con SUpabase
// const URL_SUPABASE = 'https://henznhojxuvqfbjlvhft.supabase.co';
// const SUPABASE_KEY = 'sb_publishable_wxCUYYBUCl0phm3mgz0CbA_FV5lTcQ4';
// const tabla = 'productos';
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

// const listar_productos = () => {
//     return request(`${api_URL}?select=id,nombre,precio,descripcion`);
// };

// const producto = (id) => {
//     return request(`${api_URL}?id=eq.${id}&select=id,nombre,precio,descripcion`)
//         .then(data => data?.[0] ?? Promise.reject(new Error('producto no encontrado')));
// };

// const crear_producto = (nombre, precio, descripcion) => {
//     return request(api_URL, {
//         method: "POST",
//         body: JSON.stringify({ nombre, precio, descripcion })
//     }).then(data => data?.[0]);
// };

// const actualizar_productos = (nombre, precio, descripcion, id) => {
//     return request(`${api_URL}?id=eq.${id}`, {
//         method: "PATCH",
//         body: JSON.stringify({ nombre, precio, descripcion })
//     }).then(data => data?.[0] ?? Promise.reject(new Error('no se pudo actualizar')));
// };

// const eliminar_productos = (id) => {
//     return request(`${api_URL}?id=eq.${id}`, {
//         method: "DELETE",
//     });
// };

// export const productoService = {
//     listar_productos,
//     producto,
//     crear_producto,
//     actualizar_productos,
//     eliminar_productos
// };

















// //----------con SQL Server
// const api_productos_url = 'http://localhost:3000/productos';

// const listar_productos = () => {
//     return fetch(api_productos_url).then(response => response.json());
// };

// const producto = (id) => {
//     return fetch(`${api_productos_url}/${id}`).then(respuesta => respuesta.json());
// };

// const crear_producto = (nombre, precio, descripcion) => {
//     return fetch(api_productos_url, {
//         method: "POST",
//         headers: { "content-type": "application/json" },
//         body: JSON.stringify({ nombre, precio, descripcion })
//     }).then(response => response.json());
// };

// const actualizar_productos = (nombre, precio, descripcion, id) => {
//     return fetch(`${api_productos_url}/${id}`, {
//         method: "PUT",
//         headers: { "content-type": "application/json" },
//         body: JSON.stringify({ nombre, precio, descripcion })
//     }).then(respuesta => respuesta.json())
//       .catch(err => console.log(err));
// };

// const eliminar_productos = (id) => {
//     return fetch(`${api_productos_url}/${id}`, {
//         method: "DELETE",
//     });
// };

// export const productoService = {
//     listar_productos,
//     producto,
//     crear_producto,
//     actualizar_productos,
//     eliminar_productos
// };


































//----------trabajdo con Express
const BASE_URL = "http://localhost:3000";

const productoService = {
    listar_productos: async () => {
        const res = await fetch(`${BASE_URL}/pelicula`);
        return res.json();
    },
    producto: async (id) => {
        const res = await fetch(`${BASE_URL}/pelicula/${id}`);
        return res.json();
    },
    crear_producto: async (nombre_pelicula, precio) => {
        const res = await fetch(`${BASE_URL}/pelicula`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nombre_pelicula, precio })
        });
        return res.json();
    },
    actualizar_productos: async (nombre_pelicula, precio, id) => {
        const res = await fetch(`${BASE_URL}/pelicula/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nombre_pelicula, precio })
        });
        return res.json();
    },
    eliminar_productos: async (id) => {
        const res = await fetch(`${BASE_URL}/pelicula/${id}`, {
            method: "DELETE",
        });
        return res.json();
    }
};

export { productoService };