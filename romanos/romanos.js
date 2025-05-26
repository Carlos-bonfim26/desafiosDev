
function algarismosRomanos(numero) {
  const map = [
    { valor: 1000, simbolo: 'M' },
    { valor: 900, simbolo: 'CM' },
    { valor: 500, simbolo: 'D' },
    { valor: 400, simbolo: 'CD' },
    { valor: 100, simbolo: 'C' },
    { valor: 90, simbolo: 'XC' },
    { valor: 50, simbolo: 'L' },
    { valor: 40, simbolo: 'XL' },
    { valor: 10, simbolo: 'X' },
    { valor: 9, simbolo: 'IX' },
    { valor: 5, simbolo: 'V' },
    { valor: 4, simbolo: 'IV' },
    { valor: 1, simbolo: 'I' },
  ];

  let resultado = '';

  for (let i = 0; i < map.length; i++) {
    while (numero >= map[i].valor) {
      resultado += map[i].simbolo;
      numero -= map[i].valor;
    }
  }

  return resultado;
}

console.log(algarismosRomanos(3749));

module.exports = algarismosRomanos;