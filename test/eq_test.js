import eq from '../src/eq.js';
import {expect} from 'chai';

const object = { 'a': 1 }
const other = { 'a': 1 }

describe("eq", function(){
    it("object and object -> true?", function(){
        expect(true).equal(eq(object, object));
    })
    it("object and other -> true?", function(){
        expect(false).equal(eq(object, other));
    })
    it("integers 1 and 1 -> true?", function(){
        expect(true).equal(eq(1, 1));
    })
    it("string \"asd\" and \"asd\" -> true?", function(){
        expect(true).equal(eq("asd", "asd"));
    })
    it("boolean true and integer 1 -> false?", function(){
        expect(false).equal(eq(true, 1));
    })
    it("NaN and NaN -> true?", function(){
        expect(true).equal(eq(NaN, NaN));
    })
})