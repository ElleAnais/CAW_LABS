// functions.js

function first(array, n) {
    if (array == null || n <= 0)
      return [];
    if (n == null)
      return array[0];
    return array.slice(0, n);
  }
  
  function last(array, n) {
    if (array == null)
      return [];
    if (n == null)
      return array[array.length - 1];
    return array.slice(Math.max(array.length - n, 0));
  }
  
  function concatenateStrings(array) {
    return array.join('');
  }
  
  function chunk(array, size) {
    var chunkedArr = [];
    var index = 0;
    while (index < array.length) {
      chunkedArr.push(array.slice(index, size + index));
      index += size;
    }
    return chunkedArr;
  }
  
 






// test



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

  