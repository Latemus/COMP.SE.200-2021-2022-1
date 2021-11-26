import divide from '../src/divide.js';

// These are simple test cases with numeric values
let testCases = [
   { a: 10, b: 1, result: 10 },
   { a: 10, b: 2, result: 5 },
   { a: -1, b: -1, result: 1 },
   { a: 0.6, b: 0.2, result: 3 },
   { a: 0.6, b: 1200, result: 0.0005 },
   { a: '0', b: 1, result: 0 },
   { a: '', b: 1, result: 0 },
   { a: null, b: 1, result: 0 },
   { a: 0, b: 1, result: 0 },
   { a: 1, b: 0, result: Infinity },
   { a: Infinity, b: 10, result: Infinity },
   { a: -Infinity, b: 10, result: -Infinity },
   { a: Number.MIN_VALUE, b: Number.MIN_VALUE, result: 1 },
   { a: Number.MIN_VALUE, b: Number.MAX_VALUE, result: 0 },
   { a: Number.MAX_VALUE, b: Number.MIN_VALUE, result: Infinity },
]



// Test all the test cases above
for (let testCase of testCases) {
   test(`When a is ${testCase.a} and b is ${testCase.b}, the division a / b should return ${testCase.result}`, () => {
      expect(divide(testCase.a, testCase.b)).toBe(testCase.result);
   });
}

// Test other special cases
test(`When a is 0 and b is 0, the division a / b should return NaN`, () => {
   expect(isNaN(divide( 0, 0))).toBe(true);
});
test(`When a is NaN and b is 1, the division a / b should return NaN`, () => {
   expect(isNaN(divide( NaN, 1))).toBe(true);
});

