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

for (let i = 0; i < datos.length; i++){
    if(datos[i].precio <= presupuesto){ 
        console.log('puedes comprar el pasaje de ' + datos[i].pais);
    }
    else{
        console.log('No se encontro el pasaje');
    }
}