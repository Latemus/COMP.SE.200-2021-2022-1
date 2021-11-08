import drop from '../src/drop.js'
import {expect} from 'chai';

describe('drop', function(){
    it('drops first element from the array', function(){
        expect([2, 3]).to.deep.equal(drop([1, 2, 3], 1));
    })
    it('drops first element from the array', function(){
        expect([2, 3]).to.deep.equal(drop([1, 2, 3]));
    })
    it('try with array of single value', function(){
        expect([]).to.deep.equal(drop([1]));
    })
    it('try with empty array', function(){
        expect([]).to.deep.equal(drop([]));
    })
})