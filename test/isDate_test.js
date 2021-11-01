import isDate from '../src/isDate.js';
import assert from 'assert';
import {expect} from 'chai';

describe("isDate", function(){
    it("checks if passed object is a date object", function(){
        expect(true).equal(isDate(new Date));
    })
    it("tries string Mon April 23 2012, should return false", function(){
        expect(false).equal(isDate('Mon April 23 2012'));
    })
    it("tries Object(Mon April 23 2012), should return false", function(){
        expect(false).equal(isDate(Object('Mon April 23 2012')));
    })
})