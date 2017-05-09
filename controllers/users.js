const handlerSignIn = async (ctx, next) => {
    let name = ctx.request.body.name;
    let password = ctx.request.body.password;
    console.log(`signin with name: ${name},password: ${password}`);
    if (name === 'koa' && password === '123456') {
        ctx.body = `<h1>Welcome, ${name}</h1>`;
    } else {
        ctx.body = '<h1>Login Fail</h1><a href="/">Try again</a>';
    }
};

module.exports = {
    'POST /signin': handlerSignIn
};