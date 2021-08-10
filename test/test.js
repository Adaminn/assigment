"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var textOP = __importStar(require("../src/textOp.js"));
var assert = require('assert');
describe('reverseText', function () {
    it('should be reversed', function () {
        assert.equal(textOP.reverseText("Hello"), "olleH");
    });
    it('should be empty', function () {
        assert.equal(textOP.reverseText(""), "");
    });
});
describe('invert', function () {
    it('cases should be inverted', function () {
        assert.equal(textOP.invertCase("Hello"), "hELLO");
    });
    it('should be empty', function () {
        assert.equal(textOP.invertCase(""), "");
    });
});
describe('input check', function () {
    it('should be ok', function () {
        assert.equal(textOP.isAlphaNumeric("Hello"), true);
    });
    it('should be not ok', function () {
        assert.equal(textOP.isAlphaNumeric("Hell◙"), false);
    });
});
