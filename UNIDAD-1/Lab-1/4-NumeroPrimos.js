const numeros = [1,2,3,4,5,6,7,8,9,10];

function esPrimo(num){
    if(num <= 1) return false;

    for(let i = 2; i < num; i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}

function obtenerPrimos(arr){
    let primos = [];

    for(let i = 0; i < arr.length; i++){
        if(esPrimo(arr[i])){
            primos.push(arr[i]);
        }
    }

    return primos;
}

console.log(obtenerPrimos(numeros));

const esPrimo2 = (num) => {
    if(num <= 1) return false;

    for(let i = 2; i < num; i++){
        if(num % i === 0) return false;
    }
    return true;
};

const obtenerPrimos2 = (arr) => {
    let primos = [];

    for(let numero of arr){
        if(esPrimo2(numero)){
            primos.push(numero);
        }
    }

    return primos;
};

console.log(obtenerPrimos2(numeros));