const Koa = require('koa');

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

app.listen(3000);
console.log('app started on port 3000');