import isDate from '../src/isDate.js';

test("checks if passed object is a date object", function(){
    expect(true).toBe(isDate(new Date));
})
test("tries string Mon April 23 2012, should return false", function(){
    expect(false).toBe(isDate('Mon April 23 2012'));
})
test("tries Object(Mon April 23 2012), should return false", function(){
    expect(false).toBe(isDate(Object('Mon April 23 2012')));
})