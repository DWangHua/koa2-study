const handlerHello = async (ctx, next) => {
    let name = ctx.params.name;
    ctx.body = `<h1>Hello, ${name}</h1>`;
};

module.exports = {
    'GET /hello/:name': handlerHello
};