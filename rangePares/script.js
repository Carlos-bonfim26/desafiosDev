function range(start, end){
    let result = [];
    for(let i = start; i <=end; i++){
        result.push(i);
    }
    return result;
}
function selecionarPares(array){
    let pares = array.filter(function(item){
        return item % 2 ==0;
    });
    return pares;
}
module.exports = { range, selecionarPares };
let resultadoFinal = selecionarPares(range(1, 6));

console.log(resultadoFinal);

