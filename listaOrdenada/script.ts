let num: number = 1246123;

function listaOrdenadaUnica(numero: number){
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
console.log(listaOrdenadaUnica(num));
