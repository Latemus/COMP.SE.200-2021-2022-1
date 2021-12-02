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