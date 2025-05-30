

const removeEspacos = (str) =>{
   return str.replace(/\s+/g, "");
}
const removerAcentos = (str)=> {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
const inverteString  = (str)=>{
    let chars = str.split("");
    chars.reverse();

    return chars.join("")
}

const verificarPalindromo = (str)=>{
let setString = removeEspacos(str);
setString = removerAcentos(setString);

let strInvertida = inverteString(setString);

if(strInvertida.toLowerCase() === setString.toLowerCase()){
    return `Sim, ${str} é um palindromo`;

}else{
    return `${str}, não é um palindromo`;
    
}
}

let teste = verificarPalindromo("Socorram me Subi No Ônibus Em Marrocos");

console.log(teste);