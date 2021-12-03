import add from '../src/add.js';

// These are simple test cases with numeric values
let testCases = [
   { a: 0, b: 0, result: 0 },
   { a: -1, b: 0, result: -1 },
   { a: -1, b: -1, result: -2 },
   { a: 0.6, b: 0.2, result: 0.8 },
   { a: 1, b: 0, result: 1 },
   { a: Infinity, b: 10, result: Infinity },
   { a: -Infinity, b: 0, result: -Infinity },
   { a: Number.MAX_SAFE_INTEGER, b: 1, result: 9007199254740992},
   { a: Number.MAX_VALUE, b: 1, result: 1.7976931348623157e+308},
   { a: -Number.MAX_VALUE, b: 1, result: -1.7976931348623157e+308},
   { a: -Number.MAX_VALUE, b: Number.MAX_VALUE, result: 0},
   { a: Number.MIN_SAFE_INTEGER, b: -1, result: -9007199254740992},
   // Number.MIN_VALUE is smallest non 0 value that can be represented in js
   { a: Number.MIN_VALUE, b: 0, result: 5e-324},
   { a: Number.MIN_VALUE, b: -1, result: -1},
]



// Test all the test cases above
for (let testCase of testCases) {
   test(`When a is ${testCase.a} and b is ${testCase.b}, the sum a + b should return ${testCase.result}`, () => {
      expect(add(testCase.a, testCase.b)).toBe(testCase.result);
   });
}

// Test other special cases
test(`When a is -Infinity and b is Infinity, the sum a + b should return NaN`, () => {
   expect(isNaN(add( -Infinity, Infinity))).toBe(true);
});
test(`When a is NaN and b is 1, the sum a + b should return NaN`, () => {
   expect(isNaN(add( NaN, 1))).toBe(true);
});
test(`When a is string and b is 1, the sum a + b should return NaN`, () => {
   expect(isNaN(add( "1", 1))).toBe(true);
});
test(`When a is empty string and b is 1, the sum a + b should return NaN`, () => {
   expect(isNaN(add( "", 1))).toBe(true);
});
test(`When a is null and b is 1, the sum a + b should return 1`, () => {
   expect(add( null, 1)).toBe(1);
});
test(`When a is null and b is null, the sum a + b should return 0`, () => {
   expect(add( null, null)).toBe(0);
});