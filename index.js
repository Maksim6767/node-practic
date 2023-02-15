// const Calc = require('calc-js').Calc;

// console.log(process.argv)
// const [,, a, b] = process.argv
// console.log(new Calc(parseInt(a)).sum(parseInt(b)).finish());

const path = require('path')
// console.log(path.resolve('dateUtils.js'));

const fs = require('fs')

fs.readFile(path.resolve('.//package.json'), 'utf8', (error, data) => {
    if (error) {
        console.log(error);
    }
    console.log(data);
})