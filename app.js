const Koa = require('koa');

const app = new Koa();

app.use(async (ctx, next) => {
    console.log(`${ctx.method}--${ctx.url}`);
    await next();
});

app.use(async (ctx, next) => {
    const start = (new Date()).getTime();
    await next();

    const ms = (new Date()).getTime() - start;
    console.log(`Time: ${ms}`);
});

app.use(async (ctx, next) => {
    await next();
    console.log('我之后才打印');
    ctx.type = 'text/html';
    ctx.body = '<h1>Hello Koa2</h1>';
});

app.use(async (ctx, next) => {
    console.log('我先打印');
    await next();
});

app.listen(3000);
console.log('app started on port 3000');