const compiledFn = require('../views');
const handlerIndex = async (ctx, next) => {
    ctx.body = compiledFn.getIndexCompiledHTML({
        title: 'Welcome'
    });
};



module.exports = {
    'GET /': handlerIndex,
};