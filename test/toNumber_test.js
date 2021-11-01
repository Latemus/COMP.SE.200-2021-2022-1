import toNumber from '../src/toNumber.js'
import {expect} from 'chai';

describe('toNumber', function(){
    it('try with 3.2 -> 3.2?', function(){
        expect(3.2).equal(toNumber(3.2));
    })
    it('try with Number.MIN_VALUE -> 5e-324?', function(){
        expect(5e-324).equal(toNumber(Number.MIN_VALUE));
    })
    it('try with Infinity -> Infinity?', function(){
        expect(Infinity).equal(toNumber(Infinity));
    })
    it('try with \'3.2\' -> 3.2?', function(){
        expect(3.2).equal(toNumber('3.2'));
    })
})