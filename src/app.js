const fn = require('./fn');

const { countVowels } = fn;

const text1 = 'hello, world!';
const result1 = countVowels(text1);
console.info(`[${text1}]countVowels result=`, result1);

const text2 = 'HELLO, WORLD!';
const result2 = countVowels(text2);
console.info(`[${text2}]countVowels result=`, result2);

const text3 = 'Thank you for your cooperation!!';
const result3 = countVowels(text3);
console.info(`[${text3}]countVowels result=`, result3);

const text4 = 'THANK YOU FOR YOUR COOPERATION!!';
const result4 = countVowels(text4);
console.info(`[${text4}]countVowels result=`, result4);
