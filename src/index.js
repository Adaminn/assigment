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
var readline = __importStar(require("readline"));
var textOp = __importStar(require("./textOp.js"));
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter a text: ', function (input) {
    var performance = require('perf_hooks').performance;
    var t0 = performance.now();
    if (!textOp.isAlphaNumeric(input)) {
        console.log("Unsupported character");
        rl.close();
        return;
    }
    var rev = textOp.reverseText(input);
    var revAndInv = textOp.invertCase(rev);
    var t1 = performance.now();
    var timeElapsed = t1 - t0;
    console.log("Reversed and inverted: " + revAndInv);
    var data = { "input": input,
        "output": revAndInv,
        "execution time": timeElapsed };
    textOp.exportAsJSON(data);
    rl.close();
});
