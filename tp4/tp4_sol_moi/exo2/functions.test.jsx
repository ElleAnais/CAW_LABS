const { first, last, concatenateStrings, chunk } = require('./functions');

test('first should return the first n elements of an array', () => {
  const array = [1, 2, 3, 4, 5];
  const n = 3;

  const result = first(array, n);

  expect(result).toEqual([1, 2, 3]);
});

test('last should return the last n elements of an array', () => {
  const array = [1, 2, 3, 4, 5];
  const n = 3;

  const result = last(array, n);

  expect(result).toEqual([3, 4, 5]);
});

test('concatenateStrings should return the concatenation of all elements in an array', () => {
  const array = ['Red', 'Green', 'White', 'Black'];

  const result = concatenateStrings(array);

  expect(result).toBe('RedGreenWhiteBlack');
});

test('chunk should divide an array into sub-arrays of a predefined size', () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  const size = 3;

  const result = chunk(array, size);

  expect(result).toEqual([[1, 2, 3], [4, 5, 6], [7, 8]]);
});
