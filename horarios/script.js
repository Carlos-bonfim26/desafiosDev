function conversorSegundos(hora, minutos, segundos){
let totalSegundos =0;
totalSegundos += minutos * 60;
totalSegundos += segundos;
totalSegundos += hora * 3600;
return totalSegundos;
}
console.log(conversorSegundos(2,27, 41) + " segundos");