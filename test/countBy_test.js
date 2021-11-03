import { assert } from 'chai';
import countBy from '../src/countBy.js';


describe('CountBy attributes in a list of objects', () => {
   // Test all the test cases above
   it(`When input is array or object is [{'a': 1}, {'a': 2}, {'a': 2}, {'a': 2}, {'a': 3}, {'a': 3}] and iteratee (value) => value.a`, () => {
      let inputArrayOrObject = [{ 'user': 'barney', 'active': true }, { 'user': 'betty', 'active': true }, { 'user': 'fred', 'active': false }]
      let result = { 'true': 2, 'false': 1 }
      assert.equal(JSON.stringify(countBy(inputArrayOrObject, value => value.active)), JSON.stringify(result));
   });
   it(`When input is array or object is [{'a': 1}, {'a': 2}, {'a': 2}, {'a': 2}, {'a': 3}, {'a': 3}] and iteratee (value) => value.a`, () => {
      let inputArrayOrObject = [{'a': 1}, {'a': 2}, {'a': 2}, {'a': 2}, {'a': 3}, {'a': 3}]
      let result = {1: 1, 2: 3, 3: 2}
      assert.equal(JSON.stringify(countBy(inputArrayOrObject, value => value.a)), JSON.stringify(result));
   });
});


