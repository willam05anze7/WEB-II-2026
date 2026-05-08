// import { productoService } from "../service/product_service.js";

// //recepcion de datos 
// const CrearFila = (nombre, precio, id, descripcion) => {
//     const fila = document.createElement('tr'); //creamos una fila
//     const contenido = 
// `   
// <td class="td" data-td>
//     ${nombre}
// </td>
// <td>${precio}</td>
// <td>${descripcion}</td> 
// <td>
//     <ul class="table__button-control">
//     <li>
//         <a
//         href="../screens/editar_producto.html?id=${id}"
//         class="simple-button simple-button--edit"
//         >
//         Editar
//         </a>
//     </li>
//     <li>
//         <button class="simple-button simple-button--delete" type="button" id="${id}">
//         Eliminar
//         </button>
//     </li>
//     </ul>
// </td>
// `;
    
//     fila.innerHTML = contenido;

//     const btn = fila.querySelector("button");

//     btn.addEventListener("click", () => {
//         const id = btn.id;

//         productoService.eliminar_productos(id) 
//         .then(respuesta => {
//             alert("Producto eliminado");
//             window.location.reload();
//         })
//         .catch(error => alert("Error al eliminar producto"));
//     });

//     return fila;
// }

// const tabla = document.querySelector("[data-table]");

// productoService.listar_productos()
//     .then((data) => {
//         data.forEach(({ nombre, precio, id, descripcion }) => {
//             const nueva_fila = CrearFila(nombre, precio, id, descripcion);
//             tabla.appendChild(nueva_fila);
//         });
//     })
//     .catch((error) => alert("ERROR"));  






import { productoService } from "../service/product_service.js";

const CrearFila = (nombre, precio, descripcion, id) => {
    const fila = document.createElement('tr');
    const contenido = `
        <td class="td" data-td>${nombre}</td>
        <td>${precio}</td>
        <td>${descripcion}</td>
        <td>
            <ul class="table__button-control">
                <li>
                    <a href="../screens/editar_producto.html?id=${id}"
                    class="simple-button simple-button--edit">
                    Editar
                    </a>
                </li>
                <li>
                    <button class="simple-button simple-button--delete" type="button" id="${id}">
                    Eliminar
                    </button>
                </li>
            </ul>
        </td>
    `;
    fila.innerHTML = contenido;

    const btn = fila.querySelector("button");
    btn.addEventListener("click", () => {
        if (confirm("¿Estás seguro de eliminar este producto?")) {
            productoService.eliminar_productos(id)
                .then(() => {
                    alert("Producto eliminado");
                    window.location.reload();
                })
                .catch(() => alert("Error al eliminar producto"));
        }
    });
    return fila;
};

const tabla = document.querySelector("[data-table]");

if (tabla) {
    productoService.listar_productos()
        .then((data) => {
            if (!data || data.length === 0) {
                tabla.innerHTML = '<tr><td colspan="4">No hay productos registrados</td></tr>';
                return;
            }
            data.forEach(({ nombre, precio, descripcion, id }) => {
                const nueva_fila = CrearFila(nombre, precio, descripcion, id);
                tabla.appendChild(nueva_fila);
            });
        })
        .catch(() => alert("Error al cargar los productos"));
}
