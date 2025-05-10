let letras = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function removerAcentos(texto) {
  return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function quebrandoPalavra(word) {
  word = word.toLowerCase();
  word = removerAcentos(word);
  let arrayWord = word.split("");
  return arrayWord;
}

function criptografar(palavra) {
  let resultadoCripto = [];
  let palavraQuebrada = quebrandoPalavra(palavra);

  for (let i = 0; i < palavraQuebrada.length; i++) {
    let posicao = letras.indexOf(palavraQuebrada[i]);

    if (posicao !== -1) {
      resultadoCripto.push(posicao + 1);
    } else {
      return `letra "${palavraQuebrada[i]}" desconhecida`;
    }
  }
  return resultadoCripto;
}
module.exports = {removerAcentos, quebrandoPalavra, criptografar}

