import toNumber from '../src/toNumber.js'

test('try with 3.2 -> 3.2?', function(){
    expect(3.2).toBe(toNumber(3.2));
})
test('try with Number.MIN_VALUE -> 5e-324?', function(){
    expect(5e-324).toBe(toNumber(Number.MIN_VALUE));
})
test('try with Infinity -> Infinity?', function(){
    expect(Infinity).toBe(toNumber(Infinity));
})
test('try with \'3.2\' -> 3.2?', function(){
    expect(3.2).toBe(toNumber('3.2'));
})