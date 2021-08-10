import * as readline from 'readline';
import * as textOp from './textOp.js';

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a text: ', (input) => {
    const {performance} = require('perf_hooks');
    let t0 = performance.now();

    if (!textOp.isAlphaNumeric(input)){
        console.log("Unsupported character"); 
        rl.close();
        return;
    }
    let rev = textOp.reverseText(input);
    let revAndInv = textOp.invertCase(rev);

    let t1 = performance.now();
    let timeElapsed = t1 - t0;

    console.log("Reversed and inverted: " + revAndInv);

    let data = {"input" : input,
                "output" : revAndInv,
                "execution time" : timeElapsed};
    textOp.exportAsJSON(data);
  
    rl.close();
});