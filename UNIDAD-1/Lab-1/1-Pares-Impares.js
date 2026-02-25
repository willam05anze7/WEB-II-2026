const num = [1,2,3,4,54,23,64,3];

function contarParesImpares(arr){
    let pares = 0;
    let impares = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            pares++;
        } else {
            impares++;
        }
    }

    return {pares: pares, impares: impares};
}

console.log(contarParesImpares(num));

const contarParesImpares2 = (arr) => {
    let pares = 0;
    let impares = 0;

    for(let numero of arr){
        if(numero % 2 === 0){
            pares++;
        } else {
            impares++;
        }
    }

    return {pares, impares};
};

console.log(contarParesImpares2(num));