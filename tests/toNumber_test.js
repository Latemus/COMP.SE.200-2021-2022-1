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
test('try with object 2', function(){
    expect(2).toBe(toNumber(new Object(2)));
})
test('try with binary Uint8Array(2)', function(){
    expect(2).toBe(toNumber(new Uint8Array(2)));
})
test('try with a symbol', function(){
    expect(NaN).toBe(toNumber(new Symbol()));
})