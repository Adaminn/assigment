"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exportAsJSON = exports.isAlphaNumeric = exports.reverseText = exports.invertCase = void 0;
function invertCase(text) {
    var result = '';
    for (var i = 0; i < text.length; i++) {
        var n = text.charAt(i);
        if (n == n.toUpperCase()) {
            n = n.toLowerCase();
        }
        else {
            n = n.toUpperCase();
        }
        result += n;
    }
    return result;
}
exports.invertCase = invertCase;
;
function reverseText(text) {
    return text.split('').reverse().join('');
}
exports.reverseText = reverseText;
;
function isAlphaNumeric(text) {
    return (/^[a-z0-9-\'_\.,:\(\)&\[\]\/+=\?#@ \xC0-\xFF]+$/i.test(text));
}
exports.isAlphaNumeric = isAlphaNumeric;
function exportAsJSON(data) {
    var strData = JSON.stringify(data);
    var fs = require('fs');
    fs.writeFile('processed.json', strData, function (err) {
        if (err)
            console.log('writeFile error: ', err);
    });
}
exports.exportAsJSON = exportAsJSON;
