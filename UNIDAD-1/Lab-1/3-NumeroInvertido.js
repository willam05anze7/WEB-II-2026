function invertirNumero(num){
    let invertido = num.toString().split("").reverse().join("");
    return parseInt(invertido);
}

console.log(invertirNumero(12345));

const invertirNumero2 = (num) => {
    return parseInt(num.toString().split("").reverse().join(""));
};

console.log(invertirNumero2(9876));