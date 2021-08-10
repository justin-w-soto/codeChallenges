import { doubleNumbers, toString } from './array-map.js';

test('doubles numbers', () => {
  const input = [2, 5, 100]; // arrange
  const output = doubleNumbers(input); // act
  expect(output).toEqual([4, 10, 200]); // assert
});

test('toString', () => {
    const input = [2, 5, 100];
    const output = toString(input);
    expect(output).toEqual(["2", "5", "100"])
});

test('capitalizeNames', )