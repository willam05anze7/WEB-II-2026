const Form = (() => {

    const form = document.querySelector('[data-form]');
    const inputTask = document.querySelector('[data-input-task]');
    const inputDescription = document.querySelector('[data-input-descripcion]');
    const inputFecha = document.querySelector('[data-input-fecha]');
    const inputPrioridad = document.querySelector('[data-input-prioridad]');

    const datosForm = () => {

        return {
            task: inputTask.value.trim(),
            Description: inputDescription.value.trim(),
            date: inputFecha.value.trim(),
            priority: inputPrioridad.value.trim()
        };

    };

    const reset = () => {

        inputTask.value = "";
        inputDescription.value = "";
        inputFecha.value = "";
        inputPrioridad.value = "";

    };

    const setDatos = (callback) => {

        form.addEventListener('submit', (event) => {

            event.preventDefault();

            callback(datosForm());

            reset();

        });

    };

    return { setDatos };

})();

export default Form;