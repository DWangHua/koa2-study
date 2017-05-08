const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const router = new Router();
const app = new Koa();

// 自己判断路径
// app.use(async (ctx, next) => {
//     if (ctx.path === '/') {
//         // 不再向下传递
//         ctx.body = 'index page';
//     } else {
//         await next();
//     }
// });

// app.use(async (ctx, next) => {
//     if (ctx.path === '/test') {
//         ctx.body = 'test page';
//     } else {
//         await next();
//     }
// });

// app.use(async (ctx, next) => {
//     if (ctx.path === '/error') {
//         ctx.body = 'error page';
//     } else {
//         await next();
//     }
// });

app.use(bodyParser());

// logger request url
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.method}---${ctx.url}`);
    await next();
});


router.get('/hello/:name', async (ctx, next) => {
    let name = ctx.params.name;
    ctx.body = `<h1>Hello, ${name}</h1>`;
});

router.get('/', async (ctx, next) => {
    // ctx.body = '<h1>Index</h1>';
    ctx.body = `
        <h1>Index</h1>
        <form action="/signin" method="post">
            <p>Name: <input name="name" value="koa"/></p>
            <p>Password: <input name="password" type="password"/></p>
            <p><input type="submit" value="Submit"/></p>
        </form>
    `;
});

router.post('/signin', async (ctx, next) => {
    let name = ctx.request.body.name;
    let password = ctx.request.body.password;
    console.log(`signin with name: ${name},password: ${password}`);
    if (name === 'koa' && password === '123456') {
        ctx.body = `<h1>Welcome, ${name}</h1>`;
    } else {
        ctx.body = '<h1>Login Fail</h1><a href="/">Try again</a>';
    }
});

app.use(router.routes());



app.listen(3000);
console.log('app started on port 3000');