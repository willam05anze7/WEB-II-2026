const datos =[
    {
    'pais': 'Mexico',
    'precio':200
    },
    {
        'pais': 'Colombia',
        'precio': 150
    },
    {
        'pais': 'Peru',
        'precio': 100
    },
    {
        'pais': 'Argentina',
        'precio': 50
    }
];
const presupuesto = 300;
let i =0;

let paisSeleccionado = '';
do{
    if(datos[i].precio <= presupuesto){ 
        paisSeleccionado = datos[i].pais;
    }
    i++;
} while (i<datos.length && paisSeleccionado=='')

    if (paisSeleccionado == ''){
        console.log('No se encontro el pasaj e');
    } else {
        console.log('puedes comprar el pasaje de ' + paisSeleccionado);
    }   