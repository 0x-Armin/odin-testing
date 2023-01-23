const capitalize = require('./capitalize');

test('capitalise empty string returns empty string', () => {
  expect(capitalize('')).toBe('');
});

test('capitalise string of length one', () => {
  expect(capitalize('a')).toBe('A');
});

test('no change if first char is already capitalised', () => {
  expect(capitalize('A')).toBe('A');
});

test('capitalise string of length > 1', () => {
  expect(capitalize('hi there')).toBe('Hi there');
});