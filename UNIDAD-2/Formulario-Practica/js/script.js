const btnGuardar = document.querySelector('#btnX');
const listaResultados = document.querySelector('#caosLista');
const inputNombre = document.querySelector('#nombre_input');
const inputApePaterno = document.querySelector('#ape_paterno');
const inputApeMaterno = document.querySelector('#ape_materno');
const inputEdadReloj = document.querySelector('#edad_reloj');
const inputCurso = document.querySelector('#curso_input');
const inputCiudad = document.querySelector('#ciudadInput'); 
btnGuardar.addEventListener('click', () => {
    if (inputNombre.value.trim() === "") {
        alert("¡ERROR CRÍTICO! El sistema no detecta su existencia.");
        return;
    }
    const radioHermanos = document.querySelector('input[name="h"]:checked');
    const cantidadHermanos = radioHermanos ? radioHermanos.value : "Ninguno (o se olvidó)";
    const edadTraduccion = inputEdadReloj.value ? inputEdadReloj.value.split(':')[0] : "??";

    const li = document.createElement('li');
    li.style.border = "2px dashed fuchsia"; 
    const info = document.createElement('span');
    info.textContent = `USUARIO: ${inputNombre.value} ${inputApePaterno.value} | 
                        CURSO: ${inputCurso.value} | 
                        EDAD: ${edadTraduccion} años | 
                        HERMANOS: ${cantidadHermanos} | 
                        CIUDAD (Punto): ${inputCiudad.value}`;

    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = "BORRAR PARA SIEMPRE";
    btnEliminar.style.fontSize = "10px";
    btnEliminar.onclick = () => {
        if(confirm("¿Seguro que quiere destruir su progreso?")) {
            li.remove();
        }
    };

    const btnEditar = document.createElement('button');
    btnEditar.textContent = "MODIFICAR (Troll)";
    btnEditar.style.fontSize = "10px";
    btnEditar.onclick = () => {
        inputNombre.value = inputApePaterno.value; 
        inputApePaterno.value = "EDITANDO...";
        alert("Datos devueltos al laberinto de arriba. ¡Suerte encontrándolos!");
        li.remove(); 
    };
    li.appendChild(info);
    li.appendChild(btnEditar);
    li.appendChild(btnEliminar);
    listaResultados.appendChild(li);
    console.log("Datos insertados en el caos.");
});
inputCiudad.addEventListener('input', () => {
    document.querySelector('#valorCiudad').textContent = `Coordenada: ${inputCiudad.value}%`;
});