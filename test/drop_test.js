import drop from '../src/drop.js'
import {expect} from 'chai';

describe('drop', function(){
    it('drops first element from the array', function(){
        expect([2, 3]).to.deep.equal(drop([1, 2, 3], 1));
    })
    it('drops first element from the array', function(){
        expect([2, 3]).to.deep.equal(drop([1, 2, 3]));
    })
})