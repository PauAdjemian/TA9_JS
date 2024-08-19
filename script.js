function getOdds(Array){
    let aux = Array.filter(numero => numero % 2 !== 0);
    console.log(aux);
};

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
getOdds(numeros);
