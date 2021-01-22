const Router = require('koa-router');

let adminRouter = new Router();

adminRouter.get('/index', async (ctx, next) => {
	ctx.body = "this user/admin/index page";
});

module.exports = adminRouter.routes();
