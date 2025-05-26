const { default: test, expect } = require('node:test');
const romanos = require('./romanos');

test('a conversão de 1994 deve dar MCMXCIV', () => {
  expect(romanos(1994)).toBe('MCMXCIV');
});

test('a conversão de 3749 deve dar MMMDCCXLIX', () => {
  expect(romanos(3749)).toBe('MMMDCCXLIX');
});
