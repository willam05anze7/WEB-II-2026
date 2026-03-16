import Form from "./Componentes/formulario.js";
import tabla from "./Componentes/tabla.js";
import cards from "./Componentes/cards.js";

(() => {

    Form.setDatos((task) => {

        tabla.addTask(task);
        cards.update();

    });

})();