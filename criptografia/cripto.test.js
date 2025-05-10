const {removerAcentos, quebrandoPalavra, criptografar } = require('./cripto');

test('removerAcentos(jacaré) retorna "jacare"', ()=>{
    expect(removerAcentos("jacaré")).toBe("jacare");
});

test('quebrandoPalavra("Carlos") retorna ["c", "a", "r", "l", "o", "s"]', ()=>{
    
    expect(quebrandoPalavra("Carlos")).toEqual(["c","a","r","l","o","s"]);
});

test('criptografar("Carlos") retorna [3,1,18,12,15,19]', ()=>{
  
    expect(criptografar("Carlos")).toEqual([3,1,18,12,15,19]);
});