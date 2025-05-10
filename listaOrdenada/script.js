// criar uma função que receba um número e retorne a lista ordenada
let numero = Number(prompt("Digite um número: "));
function listaOrdenada(numero){
    if(numero < -9 || numero > 9){
        let string = numero.toString();
        let lista = string.split('');
       let listaNumero = lista.map(Number);
       let listaOrdenada = listaNumero.sort();

       return listaOrdenada;
    }else{
        return numero;
    }
}
alert("Ordenando esses números numa lista assim: "+listaOrdenada(numero));