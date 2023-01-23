import { caesarCipher } from "./caesarCipher";

test('run cipher on empty string', () => {
  expect(caesarCipher('')).toBe('');
});

test('string with no upper case', () => {
  expect(caesarCipher('in my opinion')).toBe('jo nz pqjojpo');
});

test('string with punctuation', () => {
  expect(caesarCipher('in my opinion!')).toBe('jo nz pqjojpo!');
});

test('preserve upper case at right spot', () => {
  expect(caesarCipher('You can do it!')).toBe('Zpv dbo ep ju!');
});
