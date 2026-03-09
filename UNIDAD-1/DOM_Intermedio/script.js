import checkComplete from "./Components/checkComplete.js";
import deleteIcon from "./Components/delete.js";

(()=>{
    const btn = document.querySelector('[data-form-btn]');
    console.log(btn);

    const createTask= (evento)=>{
        evento.preventDefault();
        const input = document.querySelector('[data-form-input]');
        const value = input.value;//recupero el valor del input
        const list = document.querySelector('[data-list]');
        const task = document.createElement('li');
        task.classList.add('card');
        input.value = '';
        const contTaks = document.createElement('div');
        const titleTask =document.createElement('span');
        titleTask.classList.add('task');
        titleTask.innerText = value;
        contTaks.appendChild(checkComplete());//agrego el check al hijo del div
        contTaks.appendChild(titleTask);
        task.appendChild(contTaks);
        task.appendChild(deleteIcon());
        list.appendChild(task);
    //   
    }
    //llamar a crear task
    btn.addEventListener('click', createTask);

    /*
    const checkComplete = ()=>{
        const i = document.createElement('i');
        i.classList.add('far', 'fa-check-square', 'icon');//estilo de icono
        i.addEventListener('click', color);
        return i;
    }

    const color =(evento)=>{     // cambio de color al check
        const element = evento.target;
        element.classList.add('fas');
        element.classList.add('completeIcon');
        element.classList.remove('far');
    }

    const deleteIcon =()=>{
        const i = document.createElement('i');
        i.classList.add('fas', 'fa-trash-alt', 'icon');  
        i.addEventListener('click', deleteTask);
        return i;
    }

    const deleteTask =(evento)=>{
        const parent = evento.target.parentElement; //selecciona el padre del elemento
        parent.remove();
    }
*/
})();