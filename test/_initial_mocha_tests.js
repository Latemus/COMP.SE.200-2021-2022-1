import { assert } from 'chai';
import { expect } from 'chai';


// Assert style
var numbers = [1, 2, 3, 4, 5];

assert.isArray(numbers, 'is array of numbers');
assert.include(numbers, 2, 'array contains 2');
assert.lengthOf(numbers, 5, 'array contains 5 numbers');

// First positive test example
describe('Array', function() {
   describe('#indexOf()', function() {
      it('should return -1 when the value is not present', function() {
         assert.equal([1, 2, 3].indexOf(4), -1);
      });
   });
});

// First negative test example
describe('Array', function() {
   describe('#indexOf()', function() {
      it('should return -1 when the value is not present', function() {
         assert.equal([1, 2, 3].indexOf(4), 1);
      });
   });
});

