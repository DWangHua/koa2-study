const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const fs = require('fs');

const path = require('path');
const router = new Router();
const app = new Koa();
// const views = require('koa-views');

app.use(require('koa-static')(path.join(__dirname, '/static')));

app.use(bodyParser());

// logger request url
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.method}---${ctx.url}`);
    await next();
});
addCountrollers(router);
app.use(router.routes());
app.listen(3000);
console.log('app started on port 3000');


function addMapping(router, mapping) {
    for (let url in mapping) {
        if (url.startsWith('GET')) {
            let path = url.substring(4);
            router.get(path, mapping[url]);
            console.log(`register URL mapping: GET ${path}`);
        } else if (url.startsWith('POST')) {
            let path = url.substring(5);
            router.post(path, mapping[url]);
            console.log(`register URL mapping: POST ${path}`);
        } else {
            console.log(`invalid URL: ${url}`);
        }
    } 
}

function addCountrollers(router) {
    let files = fs.readdirSync(__dirname + '/controllers');
    let jsFiles = files.filter(f => f.endsWith('.js'));
    for (let f of jsFiles) {
        console.log(`process controller: ${f}`);
        let mapping = require(__dirname + '/controllers/' + f);
        addMapping(router, mapping);
    }
}