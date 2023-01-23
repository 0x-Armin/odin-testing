import { reverseString } from "./reverseString";

test('reverse empty string', () => {
  expect(reverseString('')).toBe('');
});

test('reverse string of length one', () => {
  expect(reverseString('a')).toBe('a');
});

test('reverse string with no space', () => {
  expect(reverseString('telephone')).toBe('enohpelet');
});

test('reverse string with space', () => {
  expect(reverseString('hi there')).toBe('ereht ih');
});