import compact from '../src/compact.js';


// Examples of truthy values. Taken from https://developer.mozilla.org/en-US/docs/Glossary/Truthy
const inputArray_truthy = [
   true, 
   {}, 
   [], 
   42, 
   "0", 
   "false", 
   new Date(),
   -42, 
   12n, 
   3.14, 
   -3.14, 
   Infinity, 
   -Infinity, 
]

// All falsy values. Taken from https://developer.mozilla.org/en-US/docs/Glossary/Falsy
const inputArray_falsy = [
   false, 
   null, 
   undefined, 
   0, 
   -0, 
   0n, 
   NaN, 
   "",
]


test(`Given array of Truthy values, no value is removed`, () => {
   expect(compact(inputArray_truthy)).toEqual(inputArray_truthy);
});

test(`Given array of Falsy values, empty array is returned`, () => {
   expect(compact(inputArray_falsy)).toEqual([]);
});

test(`Given array of both truthy and falsy values, an array with only truthy values is returned`, () => {
   expect(compact(inputArray_truthy.concat(inputArray_falsy).concat(inputArray_truthy).concat(inputArray_falsy)))
      .toEqual(inputArray_truthy.concat(inputArray_truthy));
})
test(`Given array of both truthy and falsy values, an array with only truthy values is returned`, () => {
   expect(compact(inputArray_falsy.concat(inputArray_truthy).concat(inputArray_falsy).concat(inputArray_truthy)))
      .toEqual(inputArray_truthy.concat(inputArray_truthy));
})

