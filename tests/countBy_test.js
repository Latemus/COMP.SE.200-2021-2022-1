import countBy from '../src/countBy.js';

test(`When input is array or object is [{ 'user': 'barney', 'active': true }, { 'user': 'betty', 'active': true }, { 'user': 'fred', 'active': false }] and iteratee (value) => value.active`, () => {
   let inputArrayOrObject = [{ 'user': 'barney', 'active': true }, { 'user': 'betty', 'active': true }, { 'user': 'fred', 'active': false }]
   let result = { 'true': 2, 'false': 1 }
   expect(countBy(inputArrayOrObject, value => value.active)).toEqual(result);
});
test(`When input is array or object is [{'a': 1}, {'a': 2}, {'a': 2}, {'a': 2}, {'a': 3}, {'a': 3}] and iteratee (value) => value.a`, () => {
   let inputArrayOrObject = [{'a': 1}, {'a': 2}, {'a': 2}, {'a': 2}, {'a': 3}, {'a': 3}]
   let result = {1: 1, 2: 3, 3: 2}
   expect(countBy(inputArrayOrObject, value => value.a)).toEqual(result);
});
test(`When input is null and iteratee (value) => value.test`, () => {
   let inputArrayOrObject = null
   let result = {}
   expect(countBy(inputArrayOrObject, value => value.test)).toEqual(result);
});


