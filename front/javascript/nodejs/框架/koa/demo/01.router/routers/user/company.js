const Router = require('koa-router');

let companyRouter = new Router();
companyRouter.get('/index', async (ctx, next) => {
	ctx.body = "this is user/company/index";
});

module.exports = companyRouter.routes();
