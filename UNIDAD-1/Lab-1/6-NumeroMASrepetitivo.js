const lista = [1,2,3,2,4,2,5,3,3,3];

function numeroMasRepetido(arr){
    let contador = {};
    let max = 0;
    let numero = null;

    for(let i = 0; i < arr.length; i++){
        let actual = arr[i];

        if(contador[actual]){
            contador[actual]++;
        } else {
            contador[actual] = 1;
        }

        if(contador[actual] > max){
            max = contador[actual];
            numero = actual;
        }
    }

    return numero;
}

console.log(numeroMasRepetido(lista));

const numeroMasRepetido2 = (arr) => {
    let contador = {};
    let max = 0;
    let numero = null;

    for(let valor of arr){
        contador[valor] = (contador[valor] || 0) + 1;

        if(contador[valor] > max){
            max = contador[valor];
            numero = valor;
        }
    }

    return numero;
};

console.log(numeroMasRepetido2(lista));