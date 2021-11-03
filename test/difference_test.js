import { assert } from 'chai';
import difference from '../src/difference.js';


let testCases = [
   { a: [], b: [], result: [] },
   { a: [1], b: [1], result: [] },
   { a: [1, 2, 3], b: [4, 5, 6], result: [1, 2, 3] },
   { a: [1, 2], b: [2, 3], result: [1] },
   { a: [1, 2, 3], b: [3, 1, 2], result: [] },
   { a: [Number, 1, 'a'], b: [Number, '1', 'a'], result: [] },
   { a: [null, NaN, ''], b: [null, NaN], result: [NaN, ''] },
   { a: [[1], {a: 1}, [], {}], b: [[1], {a: 1}, [], {}], result: [] },
];

const printArray = (array) => {
   let arrayString = '['
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


describe('Difference of lists', () => {
   // Test all the test cases above
   for (let testCase of testCases) {
      it(`When a is ${printArray(testCase.a)} and b is ${printArray(testCase.b)}, the result is an array and difference is ${printArray(testCase.result)}`, () => {
         let returnValue = difference(testCase.a, testCase.b)
         assert.equal(Array.isArray(returnValue), true) && assert.equal(!returnValue.length || returnValue.equal(testCase.result));
      });
   }
});


