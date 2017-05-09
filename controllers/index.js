const handlerIndex = async (ctx, next) => {
     ctx.body = `
        <h1>Index</h1>
        <form action="/signin" method="post">
            <p>Name: <input name="name" value="koa"/></p>
            <p>Password: <input name="password" type="password"/></p>
            <p><input type="submit" value="Submit"/></p>
        </form>
    `;
};

const handlerSignIn = async (ctx, next) => {
    let name = ctx.request.body.name;
    let password = ctx.request.body.password;
    console.log(`signin with name: ${name},password: ${password}`);
    if (name === 'koa' && password === '123456') {
        ctx.body = `<h1>Welcome, ${name}</h1>`;
    } else {
        ctx.body = '<h1>Login Fail</h1><a href="/">Try again</a>';
    }
}

module.exports = {
    'GET /': handlerIndex,
    'POST /signin': handlerSignIn
};