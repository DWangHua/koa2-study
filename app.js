const Koa = require('koa');
const Router = require('koa-router');

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
    ctx.body = '<h1>Index</h1>';
});

app.use(router.routes());



app.listen(3000);
console.log('app started on port 3000');