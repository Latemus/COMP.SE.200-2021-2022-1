import { assert } from 'chai';
import add from '../src/add.js';

// These are simple test cases with numeric values
let testCases = [
   { a: 0, b: 0, result: 0 },
   { a: -1, b: 0, result: -1 },
   { a: -1, b: -1, result: -2 },
   { a: 0.6, b: 0.2, result: 0.8 },
   { a: '0', b: 1, result: 1 },
   { a: 1, b: 0, result: 1 },
   { a: Infinity, b: 10, result: Infinity },
   { a: -Infinity, b: 0, result: -Infinity },
   { a: Number.MAX_SAFE_INTEGER, b: 1, result: 9007199254740992n},
   { a: Number.MAX_VALUE, b: 1, result: 1.7976931348623157e+308},
   { a: -Number.MAX_VALUE, b: 1, result: -1.7976931348623157e+308},
   { a: -Number.MAX_VALUE, b: Number.MAX_VALUE, result: 0},
   { a: Number.MIN_SAFE_INTEGER, b: -1, result: -9007199254740992n},
   // Number.MIN_VALUE is smallest non 0 value that can be represented in js
   { a: Number.MIN_VALUE, b: 0, result: 5e-324},
   { a: Number.MIN_VALUE, b: -1, result: -1},
]


describe('Sum of numbers', () => {
   // Test all the test cases above
   for (let testCase of testCases) {
      it(`When a is ${testCase.a} and b is ${testCase.b}, the sum a + b should return ${testCase.result}`, () => {
         assert.equal(add(testCase.a, testCase.b), testCase.result);
      });
   }

   // Test other special cases
   it(`When a is -Infinity and b is Infinity, the sum a + b should return NaN`, () => {
      assert.equal(isNaN(add( -Infinity, Infinity)), true);
   });
   it(`When a is NaN and b is 1, the sum a + b should return NaN`, () => {
      assert.equal(isNaN(add( NaN, 1)), true);
   });
   it(`When a is empty string and b is 1, the sum a + b should return 1`, () => {
      assert.equal(add( "", 1), 1);
   });
   it(`When a is null and b is 1, the sum a + b should return 1`, () => {
      assert.equal(add( null, 1), 1);
   });
});