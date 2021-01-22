/**
 * 嵌套路由 demo
 */


const koa = require('koa');
const Router = require('koa-router');

let server = new koa();
server.listen(3000);

// 1、生成主路由器
let router = new Router();

// 2、将路由器注册到服务器
server.use(router.routes());

// 3、将一级路由添加到根路由器
router.use('/user', require('./routers/user'));
router.get('/', async (ctx, next) => {
	ctx.body = "this is /";
});
