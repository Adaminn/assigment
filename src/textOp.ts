export function invertCase (text: string) {
    let result = '';
    for (let i = 0; i < text.length; i++) {

        let char = text.charAt(i);

        if (char == char.toUpperCase()) {
            char = char.toLowerCase();
        } else {
            char = char.toUpperCase();
        }

        result += char;     
    }
    return result;
};

export function reverseText (text: string) {
    return text.split('').reverse().join('');
};

export function isAlphaNumeric(text: string) {
    return (/^[a-z0-9-\'_\.,:\(\)&\[\]\/+=\?#@ \xC0-\xFF]+$/i.test(text))
}

export function exportAsJSON(data: any) {
    let strData = JSON.stringify(data);
    let fs = require('fs');
    fs.writeFile('processed.json', strData, function(err: Error) {
        if(err) console.log('writeFile error: ', err);
    });
}