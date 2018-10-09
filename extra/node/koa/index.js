const Koa = require('koa');

const app = new Koa();

app.use(async(ctx, next) =>{
  debugger;
  await next();
  ctx.response.type = 'text/html';
  ctx.response.body = '<h1>Hello, koa</h1>';

  function timeout(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  async function asyncPrint(value, ms) {
    await timeout(ms);
    console.log(value);
  }

  asyncPrint('hello world',4000);
})

app.listen(30000)

