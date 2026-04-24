/*
//-----------optimizado-----------//

const listar_productos = () => {
    return fetch("http://localhost:3000/productos")//hacemos l atepicion con fetch, que devuelve una promesa
    .then((response)=>response.json())//convertimos la respuesta a json
}

const crear_producto = (nombre,precio, descripcion)=>{
    return fetch("http://localhost:3000/productos",{
        method:"POST",//metodo post para crear un nuevo cliente
        headers:{
            "content-type":"application/json"//indicamos que el contenido es json
        },
        body:JSON.stringify({nombre,precio,descripcion, id:uuid.v4()})//realizamos la conversion a json del objeto que queremos enviar
        //nota muy importe en el src crea identificadores unicos
    });

};

const actualizar_productos = (nombre,precio,descripcion, id)=>{//solo modifico el nombre y precio 
    return fetch(`http://localhost:3000/productos/${id}`, {
        method:"PUT",//metodo put para actualizar un cliente
        headers:{
            "content-type":"application/json"//indicamos que el contenido es json
        },
        body:JSON.stringify({nombre,precio, descripcion}) //realizamos la conversion a json del objeto que queremos enviar
    })
    .then(respuesta => respuesta) // Retornamos la respuesta para seguir la promesa
    .catch((error) => console.log(error));
};

const eliminar_productos = (id)=>{
    console.log("elimina ",id);
    return fetch(`http://localhost:3000/productos/${id}`,{
        method:"DELETE",//metodo delete para eliminar un cliente
    })
}

//referencia a ID
const producto =(id)=>{
    return fetch(`http://localhost:3000/productos/${id}`,).then((respuesta)=>respuesta.json());
}
*/
















//---------con MYSQL (XAMPP) - Módulo de Productos
const api_productos_url = 'http://localhost/_api/product_service.php'

// 1. Obtener todos los productos
const listar_productos = () => {
    return fetch(api_productos_url).then(response => {
        if (!response.ok) throw new Error('error al cargar productos');
        return response.json();
    })
}

// 2. Crear un nuevo producto
// Recibe: nombre, precio, descripción e id
const crear_producto = (nombre, precio, descripcion, id) => {
    return fetch(api_productos_url, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({ nombre, precio, descripcion, id })
    }).then(response => {
        if (!response.ok) throw new Error('error al crear producto');
        return response.json();
    })
};

// 3. Eliminar un producto por su ID
const eliminar_producto = (id) => {
    return fetch(`${api_productos_url}?id=${id}`, {
        method: "DELETE",
    }).then(response => {
        if (!response.ok) throw new Error('error al eliminar producto');
        return response.json();
    })
}

// 4. Actualizar un producto existente
const actualizar_producto = (nombre, precio, descripcion, id) => {
    return fetch(`${api_productos_url}?id=${id}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({ nombre, precio, descripcion, id })
    }).then(respuesta => {
        console.log("Actualizado:", respuesta);
        return respuesta.json();
    }).catch((err) => console.log("Error al actualizar:", err));
}

// 5. Obtener los datos de UN solo producto por su ID
const obtener_producto = (id) => {
    return fetch(`${api_productos_url}?id=${id}`).then((respuesta) => {
        if (!respuesta.ok) throw new Error('error al obtener el producto');
        return respuesta.json();
    });
}















export const productoService ={
    listar_productos,
    crear_producto,
    actualizar_productos,
    eliminar_productos,
    producto
};