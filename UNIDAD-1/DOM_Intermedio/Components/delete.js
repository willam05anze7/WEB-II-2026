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

export default deleteIcon; 