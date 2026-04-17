/*//recepcion de datos 
const CrearFila = (nombre,email)=>{
    const fila = document.createElement('tr');//creamos una fila
    const contenido = 
    `
    <td class="td" data-td>
        ${nombre}
    </td>
    <td>${email}</td>
    <td>
        <ul class="table__button-control">
        <li>
            <a
            href="../screens/editar_cliente.html"
            class="simple-button simple-button--edit"
            >
            Editar
            </a>
        </li>
            <li>
            <button class="simple-button simple-button--delete" type="button">
            Eliminar
            </button>
            </li>
        </ul>
        </td>
    `
    ;
    fila.innerHTML = contenido;
    return fila;
}
*/


/*
const listar_clientes = ()=>{
    const promesa = new Promise((resolve,reject)=>{
        const http = new XMLHttpRequest();//variable para request con http 
        http.open("GET","http://localhost:3000/perfil");//abrimos la conexion con el metodo get y la url del json server
        http.send();//enviamos una solicitud
        http.onload = ()=>{
            const response = JSON.parse(http.response); //convertimos la respuesta a un objeto JSON
            if(http.status >= 400){// si el status es 400 o mayor, es un error
                reject(response);
            }else{
                resolve(response);
            }
        }
    })
    return promesa;
}

listar_clientes()
    .then((data)=>{
        data.forEach((perfil)=>{
            const nueva_fila = CrearFila(perfil.nombre,perfil.email);
            tabla.appendChild(nueva_fila);
        });
})
.catch((error)=>alert("sin conexion"));

*/


//-----------optimizado-----------//

const listar_clientes = () => {
    return fetch("http://localhost:3000/perfil")//hacemos l atepicion con fetch, que devuelve una promesa
    .then((response)=>response.json())//convertimos la respuesta a json
}

const crear_cliente = (nombre,email)=>{
    return fetch("http://localhost:3000/perfil",{
        method:"POST",//metodo post para crear un nuevo cliente
        headers:{
            "content-type":"application/json"//indicamos que el contenido es json
        },
        body:JSON.stringify({nombre,email, id:uuid.v4()})//realizamos la conversion a json del objeto que queremos enviar
        //nota muy importe en el src crea identificadores unicos
    });

};

const actualizar_cliente = (nombre,email, id)=>{//solo modifico el nombre y email 
    return fetch(`http://localhost:3000/perfil/${id}`, {
        method:"PUT",//metodo put para actualizar un cliente
        headers:{
            "content-type":"application/json"//indicamos que el contenido es json
        },
        body:JSON.stringify({nombre,email}) //realizamos la conversion a json del objeto que queremos enviar
    })
    .then(respuesta => respuesta) // Retornamos la respuesta para seguir la promesa
    .catch((error) => console.log(error));
};

const eliminar_cliente = (id)=>{
    console.log("elimina ",id);
    return fetch(`http://localhost:3000/perfil/${id}`,{
        method:"DELETE",//metodo delete para eliminar un cliente
    })
}

//referencia a ID
const cliente =(id)=>{
    return fetch(`http://localhost:3000/perfil/${id}`,).then((respuesta)=>respuesta.json());
}

export const clienteService ={
    listar_clientes,
    crear_cliente,
    actualizar_cliente,
    eliminar_cliente,
    cliente
}