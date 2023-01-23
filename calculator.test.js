import { calculator } from "./calculator";

test('expect 1 + 1 to be 2', () => {
  expect(calculator().add(1, 1)).toBe(2);
});

test('expect 4 - 1 to be 3', () => {
  expect(calculator().subtract(4, 1)).toBe(3);
});

test('expect 3 * 2 to be 6', () => {
  expect(calculator().multiply(3, 2)).toBe(6);
});

test('expect 10 / 2 to be 5', () => {
  expect(calculator().divide(10, 2)).toBe(5);
});