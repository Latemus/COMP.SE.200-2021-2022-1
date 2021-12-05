import isEmpty from '../src/isEmpty.js'

test('try with null -> true?', function(){
    expect(true).toBe(isEmpty(null));
})
test('try with true -> true?', function(){
    expect(true).toBe(isEmpty(true));
})
test('try with 1 -> true?', function(){
    expect(true).toBe(isEmpty(1));
})
test('try with [1, 2, 3] -> false?', function(){
    expect(false).toBe(isEmpty([1, 2, 3]));
})
test('try with abc -> false?', function(){
    expect(false).toBe(isEmpty('abc'));
})
test('try with { \'a\': 1 } -> false?', function(){
    expect(false).toBe(isEmpty({ 'a': 1 }));
})
test('try with empty array -> false?', function(){
    expect(true).toBe(isEmpty([]));
})
test('try with empty object -> false?', function(){
    expect(true).toBe(isEmpty({}));
})
test('try with an empty array -> true?', function(){
    expect(true).toBe(isEmpty([]));
})