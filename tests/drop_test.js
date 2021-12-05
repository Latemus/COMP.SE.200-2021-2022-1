import drop from '../src/drop.js'

it('drops first element from the array', function(){
    expect([2, 3]).toEqual(drop([1, 2, 3], 1));
})
it('drops first element from the array', function(){
    expect([2, 3]).toEqual(drop([1, 2, 3]));
})
it('try with array of single value', function(){
    expect([]).toEqual(drop([1]));
})
it('try with empty array', function(){
    expect([]).toEqual(drop([]));
})
it('try with an array inside an array', function(){
    expect([]).toEqual(drop([[1, 2]]));
})
it('drop over the length of an array', function(){
    expect([]).toEqual(drop([1, 2, 3], 5));
})
it('drop none', function(){
    expect([1, 2, 3]).toEqual(drop([1, 2, 3], 0));
})