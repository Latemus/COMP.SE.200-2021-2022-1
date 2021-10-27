var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();


// Assert style
var numbers = [1, 2, 3, 4, 5];

assert.isArray(numbers, 'is array of numbers');
assert.include(numbers, 2, 'array contains 2');
assert.lengthOf(numbers, 5, 'array contains 5 numbers');

// Expect style
var numbers = [1, 2, 3, 4, 5];

expect(numbers).to.be.an('array').that.includes(2);
expect(numbers).to.have.lengthOf(5);

// Should style
var numbers = [1, 2, 3, 4, 5];

numbers.should.be.an('array').that.includes(2);
numbers.should.have.lengthOf(5);



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

