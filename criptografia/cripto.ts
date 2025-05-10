let lyrics: string[] = [
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

function removeAccents(text:string) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function breakingWord(word: string) {
  word = word.toLowerCase();
  word = removeAccents(word);
  let arrayWord : string[]= word.split("");
  return arrayWord;
}

function encrypt(word:string) {
  let cryptoResult: number[] = [];
  let brokenWord:string[] = breakingWord(word);

  for (let i = 0; i < brokenWord.length; i++) {
    let position:number = lyrics.indexOf(brokenWord[i]);

    if (position !== -1) {
      cryptoResult.push(position + 1);
    } else {
      return `letra "${brokenWord[i]}" desconhecida`;
    }
  }
  return cryptoResult;
}
console.log(encrypt("Dogão"));