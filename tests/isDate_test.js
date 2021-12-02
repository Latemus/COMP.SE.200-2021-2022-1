import isDate from '../src/isDate.js';

test("checks if passed object is a date object", function(){
    expect(true).toEqual(isDate(new Date));
})
test("tries string Mon April 23 2012, should return false", function(){
    expect(false).toEqual(isDate('Mon April 23 2012'));
})
test("tries Object(Mon April 23 2012), should return false", function(){
    expect(false).toEqual(isDate(Object('Mon April 23 2012')));
})