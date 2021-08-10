import * as textOP from '../src/textOp.js';
var assert = require('assert');

describe('reverseText', function() {
    it('should be reversed', function() {
        assert.equal(textOP.reverseText("Hello"), "olleH");
    });

    it('should be empty', function() {
        assert.equal(textOP.reverseText(""), "");
    });
});

describe('invert', function() {
    it('cases should be inverted', function() {
      assert.equal(textOP.invertCase("Hello"), "hELLO");
    });

    it('should be empty', function() {
        assert.equal(textOP.invertCase(""), "");
    });
});

describe('input check', function() {
    it('should be ok', function() {
      assert.equal(textOP.isAlphaNumeric("Hello"), true);
    });

    it('should be not ok', function() {      
        assert.equal(textOP.isAlphaNumeric("Hell◙"), false);
    });
});