import { productoService } from "../service/product_service.js";

const formulario = document.querySelector("[data-form]");

const obInfo = async()=>{
    const url = new URL(window.location);
    const id = (url.searchParams.get("id"));
    if (id == null){
        window.location.href="../screens/error.html"
    }
    const nombre = document.querySelector("[data-nombre]");
    const precio = document.querySelector("[data-precio]");
    const descripcion = document.querySelector("[data-descripcion]");
    try {
        const producto = await productoService.producto(id);
        if(producto.nombre && producto.precio){ //rescato los formularios de json server y los asigno a los formularios del html
            nombre.value = producto.nombre;
            precio.value = producto.precio;
            descripcion.value = producto.descripcion;
        }else{
            throw new Error();
        }
    }
    catch (error) {
        window.location.href="../screens/error.html"
    }
};
obInfo();

formulario.addEventListener("submit", async (evento)=>{
    evento.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;
    productoService.actualizar_productos(nombre, precio, descripcion, id)
    .then(()=>{
        window.location.href = "../screens/edicion_concluido.html";
    })
})

