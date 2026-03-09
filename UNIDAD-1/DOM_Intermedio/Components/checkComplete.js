const checkComplete = ()=>{
        const i = document.createElement('i');
        i.classList.add('far', 'fa-check-square', 'icon');//estilo de icono
        i.addEventListener('click', color);
        return i;
    }

//programacion a componenetes 

    const color =(evento)=>{     // cambio de color al check
        const element = evento.target;
        element.classList.add('fas');
        element.classList.add('completeIcon');
        element.classList.remove('far');
        if (element.classList.contains('fas')){
            element.style.color ='red';

        }else{
            element.style.color='';
        }
        

    }

export default checkComplete;