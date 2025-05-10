const { range, selecionarPares } = require('./script');

// test('range(1, 5) retorna [1, 2, 3, 4, 5]', () => {
//   expect(range(1, 5)).toEqual([1, 2, 3, 4, 5]);
// });

// test('range(3, 3) retorna [3]', () => {
//   expect(range(3, 3)).toEqual([3]);
// });

// test('selecionarPares([1, 2, 3, 4]) retorna [2, 4]', () => {
//   expect(selecionarPares([1, 2, 3, 4])).toEqual([2, 4]);
// });

// test('selecionarPares([]) retorna []', () => {
//   expect(selecionarPares([])).toEqual([]);
// });
test('selecionarPares(range(1,6)) retorna [2,4,6]',()=>{
    const numeros = range(1,6);
    const pares = selecionarPares(numeros);
    expect(pares).toEqual([2,4,6]);
});