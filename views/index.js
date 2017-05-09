const pug = require('pug');
const path = require('path');
const options = {
    pretty: true
};
const getIndexCompiledHTML = pug.compileFile(path.join(__dirname, 'index.pug'), options);

// const html = getIndexCompiledHTML({
//     title: 'test'
// });

// console.log(html);

module.exports = {
    getIndexCompiledHTML: getIndexCompiledHTML
};