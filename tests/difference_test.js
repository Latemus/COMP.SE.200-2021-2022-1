import difference from '../src/difference.js';

//Check [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
const testCases = [
   { a: null, b: null, result: [] },
   { a: [], b: [], result: [] },
   { a: [1], b: [1], result: [] },
   { a: [1, 2, 3], b: [4, 5, 6], result: [1, 2, 3] },
   { a: [1, 2], b: [2, 3], result: [1] },
   { a: [1, 2, 3], b: [3, 1, 2], result: [] },
   { a: [1, 2, 3], b: ['3', '1', '2'], result: [1, 2, 3] },
   { a: [-0], b: [+0], result: [] },
   { a: [+0], b: [-0], result: [] },
   { a: [Number, 1, 'a'], b: [Number, '1', 'a'], result: [1] },
   { a: [null, NaN, ''], b: [null, NaN], result: [''] },
   { a: [[1], [2]], b: [[2]], result: [[1], [2]] },
   { a: [[1], {a: 1}, [], {}], b: [[1], {a: 1}, [], {}], result: [[1], {a: 1}, [], {}] }
];

// Test all the test cases above
const runtest = () => {
   for (let testCase of testCases) {
      test(`When a is ${printArray(testCase.a)} and b is ${printArray(testCase.b)}, the result is an array and difference is ${printArray(testCase.result)}`, () => {
         let returnValue = difference(testCase.a, testCase.b)
         expect(Array.isArray(returnValue)).toBe(true); 
         expect(returnValue).toEqual(testCase.result);
      });
   }
}

// Just helper function for visualizing input and output
const printArray = (array) => {
   let arrayString = '['
   if (array === null) {
      return "null"
   }
   if (array === undefined) {
      return "undefined"
   }
   for (let i = 0; i < array.length; i++) {
      if (i > 0 && array.length > 1) {
         arrayString += ', '
      }

      if (typeof array[i] == 'undefined') {
         arrayString += 'undefined'
      }
      else if (Array.isArray(array[i]) && array[i].length == 0) {
         arrayString += '[]'
      }
      else if (Array.isArray(array[i]) && array[i].length > 0) {
         arrayString += "[" + array[i] + "]"
      }
      else if (typeof array[i] == 'string' && array[i].length == 0) {
         arrayString += "''"
      }
      else if (typeof array[i] == 'string' && array[i].length > 0) {
         arrayString += "'" + array[i] + "'"
      }
      else if (array == null) {
         arrayString += 'null'
      }
      else {
         arrayString += array[i]
      }
   }
   return arrayString += ']'
}

runtest();