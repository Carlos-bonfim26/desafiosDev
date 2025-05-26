const numeros = [1, 5, 8, 12, 15, 20];

const multiplosCinco = numeros.filter(n => n % 5 == 0);

const somarMultiplos = multiplosCinco.reduce((acc, curr)=> acc + curr, 0); 
