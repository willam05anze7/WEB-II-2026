import cards from "./cards.js";

const tabla = (() => {

    const cuerpoTabla = document
        .getElementById('taskTable')
        .getElementsByTagName('tbody')[0];

    const addTask = (task) => {

        const nuevaFila = cuerpoTabla.insertRow();

        nuevaFila.insertCell(0).textContent = task.task;
        nuevaFila.insertCell(1).textContent = task.Description;
        nuevaFila.insertCell(2).textContent = task.date;
        nuevaFila.insertCell(3).textContent = task.priority;

        const accionCell = nuevaFila.insertCell(4);

        const acciones = document.createElement('div');
        acciones.className = 'actions';

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Hecho';
        completeButton.className = 'view';

        completeButton.addEventListener('click', () => {

            nuevaFila.classList.toggle('completed');
            cards.update();

        });

        acciones.appendChild(completeButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.className = 'delete';

        deleteButton.addEventListener('click', () => {

            cuerpoTabla.deleteRow(nuevaFila.rowIndex - 1);
            cards.update();

        });

        acciones.appendChild(deleteButton);
        accionCell.appendChild(acciones);

        const Editar = document.createElement('button');
        Editar.textContent = 'Modificar';
        Editar.className = "Editar";

        Editar.addEventListener('click',() =>{
            const esEditable = nuevaFila.contentEditable === "true";
            if (!esEditable) 
                {
                    nuevaFila.contentEditable = "true";
                    Editar.textContent = "Guardar";
                    Editar.style.backgroundColor = "#4CAF50"; 
                    nuevaFila.focus(); 
                } 
                else 
                {
                    nuevaFila.contentEditable = "false";
                    Editar.textContent = "Modificar";
                    Editar.style.backgroundColor = "";
                    cards.update(); 
                }
        });
        acciones.appendChild(Editar);

    };

    const getTask = () => {

        return Array.from(cuerpoTabla.rows).map(row => ({

            task: row.cells[0].textContent,
            Description: row.cells[1].textContent,
            date: row.cells[2].textContent,
            priority: row.cells[3].textContent,
            completed: row.classList.contains('completed')

        }));

    };

    return { addTask, getTask };

})();

export default tabla;