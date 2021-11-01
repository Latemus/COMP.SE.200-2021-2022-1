import isEmpty from '../src/isEmpty.js'
import {expect} from 'chai';

describe('drop', function(){
    it('try with null -> true?', function(){
        expect(true).equal(isEmpty(null));
    })
    it('try with true -> true?', function(){
        expect(true).equal(isEmpty(true));
    })
    it('try with 1 -> true?', function(){
        expect(true).equal(isEmpty(1));
    })
    it('try with [1, 2, 3] -> false?', function(){
        expect(false).equal(isEmpty([1, 2, 3]));
    })
    it('try with abc -> false?', function(){
        expect(false).equal(isEmpty('abc'));
    })
    it('try with { \'a\': 1 } -> false?', function(){
        expect(false).equal(isEmpty({ 'a': 1 }));
    })
})