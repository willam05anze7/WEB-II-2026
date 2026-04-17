
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

export const productoService ={
    listar_productos,
    crear_producto,
    actualizar_productos,
    eliminar_productos,
    producto
};