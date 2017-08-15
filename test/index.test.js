var chai = require('chai');
var assert = chai.assert;
var countVowels = require('../writeTests').countVowels;

describe('countVowels', function(){
  it('should count vowels in a string', function(){
    const number = countVowels('string');
    assert.equal(number, 1);
  })
  it('should take a string argument', function(){
    assert.equal(8, "8", "this is not a string");
  })
})
